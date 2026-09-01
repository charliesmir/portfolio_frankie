"use client";

import { SanityMain } from "@/adapters/types";
import { ButtonProps } from "@/components/atoms/button/Button";
import { TitleSection } from "@/components/sections/titleSection/TitleSection";
import "./homePage.css";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Header } from "@/components/molecules/header/Header";
import { ArtworksSection } from "@/components/sections/artworksSection/ArtworksSection";
import { CollectionCardProps } from "@/components/molecules/collectionCard/CollectionCard";
import { CvSection } from "@/components/sections/cvSection/CvSection";
import { Contact } from "@/components/atoms/contact/Contact";
import { ContactsSection } from "@/components/sections/contactsSection/ContactsSection";
import { Footer } from "@/components/atoms/footer/Footer";

interface HomeContentProps {
  sanityImport: SanityMain;
}

export default function HomeContent({ sanityImport }: HomeContentProps) {
  // Basic settings
  const router = useRouter();

  // Using refs to make automatic scroll to the needed section
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const cvRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const artworksRef = useRef<HTMLDivElement>(null);

  // Scroll function with smooth animation
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

// Navigation buttons
  const navButtons: ButtonProps[] = [
     {
        title: "Home",
        onClick: () => scrollToSection(mainRef),
        alignment: "center",
        size: "medium",
      },
      {
        title: "Artworks",
   onClick: () => scrollToSection(artworksRef),
        alignment: "center",
        size: "medium",
      },
      {
        title: "Cv",
        onClick: () => scrollToSection(cvRef),
        alignment: "center",
        size: "medium",
      },
      {
        title: "Contacts",
        onClick: () => scrollToSection(contactsRef),
        alignment: "center",
        size: "medium",
      },
    ];

const collections = sanityImport.artworksSection.gallery.collections;

const [activeCollectionIndex, setActiveCollectionIndex] =
  useState<number>(0);

const activeCollection = collections[activeCollectionIndex];

const preview: CollectionCardProps = {
  title: activeCollection.name,
  artwork: activeCollection.artwork,
  button: {
    title: "more",
    alignment: "center",
    size: "small",
    hasIcon: true,
    icon: "arrow_forward.svg",
    onClick: () => {
      router.push(`/collections/${activeCollection.slug}`);
    },
  },
};

const [cvContent, setCvContent] = useState<
  "Statement" | "Exhibitions" | "Education" | "Experience"
>("Statement");

const cvButtons: ButtonProps[] = [
  {
    alignment: "right",
    hasIcon: false,
    size: "large",
    title: "Statement",
    isActive: cvContent === "Statement",
    onClick: () => setCvContent("Statement"),
  },
  {
    alignment: "right",
    hasIcon: false,
    size: "large",
    title: "Exhibitions",
    isActive: cvContent === "Exhibitions",
    onClick: () => setCvContent("Exhibitions"),
  },
  {
    alignment: "right",
    hasIcon: false,
    size: "large",
    title: "Education",
    isActive: cvContent === "Education",
    onClick: () => setCvContent("Education"),
  },
  {
    alignment: "right",
    hasIcon: false,
    size: "large",
    title: "Experience",
    isActive: cvContent === "Experience",
    onClick: () => setCvContent("Experience"),
  },
];

    const [loading, setLoading] = useState<boolean>(false);

    if (loading) {
    return (
      <div className="HomeLoading">
        <div className="HomeLoadingText">Loading...</div>
      </div>
    );
  }



  return (
    <div id="main" ref={mainRef} className="Home">
        <div className="HomeTitle"></div>
        <div className="HomeHeader">
        <Header button={navButtons}/>
        </div>
        <TitleSection name={sanityImport.titleSection.name} surname={sanityImport.titleSection.surname} about={sanityImport.titleSection.about} picture={sanityImport.titleSection.picture}/>
        <div id="artworks" ref={artworksRef} className="HomeArtworks"/>
        <div className="HomeArtworksSection">
        <ArtworksSection title={{title: sanityImport.artworksSection.title.title, alignment: "right", color: "Default"}} 
        preview={preview} 
        gallery={{collections, onClick: setActiveCollectionIndex,}
        }/>
        <div className="HomeArtworksAccent"/>
        </div>
        <div id="cv" ref={cvRef} className="HomeCV"></div>
        <div className="HomeCVSection">
        <CvSection title={{title: sanityImport.cvSection.title.title, alignment: "left", color: "Default"}} buttons={{sections: cvButtons}} info={{
  ...sanityImport.cvSection.info,
  content: cvContent,
}}/></div>
        <div id="contacts" ref={contactsRef} className="HomeContacts"/>
<div className="HomeContactsSection">
        <ContactsSection title={{title: sanityImport.contactsSection.title.title, alignment: "right", color: "onPrimary"}} contacts={sanityImport.contactsSection.contacts}/>
           <div className="HomeContactsAccent"/>
   </div>
   <Footer LastUpdateYear={"2026"}/>
   
    </div>
  );
}
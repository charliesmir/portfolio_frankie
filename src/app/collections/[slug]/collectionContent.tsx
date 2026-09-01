"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SanityCollection } from "@/adapters/types";
import { CollectionPage } from "@/components/pages/collectionPage/CollectionPage";
import { Header } from "@/components/molecules/header/Header";
import { ButtonProps } from "@/components/atoms/button/Button";
import "./collectionContent.css";
import { Footer } from "@/components/atoms/footer/Footer";

interface Props {
  collection: SanityCollection;
}

export default function CollectionContent({ collection }: Props) {
  // Basic settings
  const router = useRouter();

const artworks = collection.gallery.artworks;

const [activeArtworkIndex, setActiveArtworkIndex] = useState(0);

const activeArtwork = artworks[activeArtworkIndex];

const handlePrev = () => {
  setActiveArtworkIndex((current) =>
    current === 0 ? artworks.length - 1 : current - 1
  );
};

const handleNext = () => {
  setActiveArtworkIndex((current) =>
    current === artworks.length - 1 ? 0 : current + 1
  );
};

  const highlight = {
    card: {
      image: activeArtwork.image,
      title: activeArtwork.title,
      info: activeArtwork.info,
      description: activeArtwork.description,
    },
    arrow: "/arrow.svg",
    handlePrev,
    handleNext,
  };

  const navButtons: ButtonProps[] = [
       {
          title: "Home",
          onClick: () => router.push("/"),
          alignment: "center",
          size: "medium",
          isActive: true,
        },
        {
          title: "Artworks",
          onClick: () => router.push("/#artworks"),
          alignment: "center",
          size: "medium",
        },
        {
          title: "Cv",
          onClick: () => router.push("/#cv"),
          alignment: "center",
          size: "medium",
        },
        {
          title: "Contacts",
          onClick: () => router.push("/#contacts"),
          alignment: "center",
          size: "medium",
        },
      ];

const [isHeaderVisible, setIsHeaderVisible] = useState(true);

const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const difference = currentScrollY - lastScrollY.current;

    if (currentScrollY < 50) {
      setIsHeaderVisible(true);
    } else if (difference > 10) {
      // scrolling down
      setIsHeaderVisible(false);
      lastScrollY.current = currentScrollY;
    } else if (difference < -10) {
      // scrolling up
      setIsHeaderVisible(true);
      lastScrollY.current = currentScrollY;
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const [loading, setLoading] = useState<boolean>(false);

  const handleGalleryClick = (index: number) => {
  setActiveArtworkIndex(index);

  document.querySelector(".ArtCarousel")?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

  if (loading) {
    return (
      <div className="ProjectLoading">
        <div className="ProjectLoadingText">Loading...</div>
      </div>
    );
  }

  return (
    <div className="CollectionContent">
<div
  className={`CollectionContentHeader ${
    isHeaderVisible ? "visible" : "hidden"
  }`}
>
  <Header button={navButtons} />
</div>
      <div className="CollectionContentMain">
      <CollectionPage title={collection.title} highlight={highlight}  gallery={{
  ...collection.gallery,
  onClick: handleGalleryClick,
}}/>
</div>
<Footer LastUpdateYear={"2026"}/>
    </div>
  );
}
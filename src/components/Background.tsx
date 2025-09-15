import React, { useEffect, useRef } from "react";
// import "./PaperEffect.css";

const PaperBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    class PaperEffect {
      private colors = ["white", "black", "red"];
      private interval?: number;
      private container: HTMLElement;

      constructor(container: HTMLElement) {
        this.container = container;
        this.init();
      }

      private init() {
        this.createPapers();
        this.startAnimation();
      }

      public createPaper(): HTMLDivElement {
        const paper = document.createElement("div");
        paper.className = "paper";

        const colorClass =
          this.colors[Math.floor(Math.random() * this.colors.length)];
        paper.classList.add(colorClass);

        if (Math.random() > 0.5) {
          paper.classList.add("sway");
        }

        paper.style.left = Math.random() * 100 + "%";
        paper.style.animationDuration = Math.random() * 3 + 3 + "s";
        paper.style.animationDelay = Math.random() * 2 + "s";

        const size = Math.random() * 0.5 + 0.8;
        paper.style.transform = `scale(${size})`;

        if (paper.classList.contains("sway")) {
          paper.style.setProperty("--sway-duration", Math.random() * 2 + 3 + "s");
          paper.style.animationDuration +=
            ", " + (Math.random() * 2 + 3) + "s";
        }

        this.container.appendChild(paper);

        setTimeout(() => {
          if (paper.parentNode) {
            paper.parentNode.removeChild(paper);
          }
        }, 8000);

        return paper;
      }

      private createPapers() {
        for (let i = 0; i < 15; i++) {
          setTimeout(() => this.createPaper(), i * 300);
        }
      }

      private startAnimation() {
        this.interval = window.setInterval(() => this.createPaper(), 300);
      }

      public stopAnimation() {
        if (this.interval) clearInterval(this.interval);
      }
    }

    const container = containerRef.current;
    if (!container) return;

    const effect = new PaperEffect(container);
}, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>;
};

export default PaperBackground;

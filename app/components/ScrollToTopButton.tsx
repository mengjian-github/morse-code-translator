'use client';

export default function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="btn-primary text-base"
    >
      Back to Top
    </button>
  );
}

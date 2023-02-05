export default function ScrollTopButton({ scrollToTop, showScrollTop }) {
  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-3 bottom-3 z-10 ${
        showScrollTop ? `grid` : `hidden`
      } h-12 w-12 content-center justify-center rounded-full bg-rose-500/50 text-white`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
}

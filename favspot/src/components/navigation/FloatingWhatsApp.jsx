const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    {/* WhatsApp logo (Font Awesome brands path, simplified viewBox 0 0 24 24) */}
    <path d="M16.6 14.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.4.5c-.1.1-.3.2-.5.1a5.7 5.7 0 0 1-2.8-2.5c-.1-.2 0-.3.1-.5l.3-.4.2-.3a.4.4 0 0 0 0-.4l-.7-1.6c-.1-.2-.2-.2-.4-.2h-.3a.7.7 0 0 0-.5.2c-.2.2-.8.8-.8 2s.8 2.3.9 2.5A7 7 0 0 0 13 16c.8.3 1.5.5 2 .3.6-.2 1.2-.8 1.4-1.2.2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Zm-4.6-11a8.7 8.7 0 0 0-7.5 13.2L3.2 21l4.8-1.3A8.8 8.8 0 1 0 12 3.2Zm0 15.8c-1.3 0-2.6-.3-3.7-1l-.3-.2-2.8.8.8-2.7-.2-.3a7 7 0 1 1 6.2 3.4Z" />
  </svg>
);

function FloatingWhatsApp() {
  return (
    <div className="fixed left-0 right-0 bottom-6 z-50 pointer-events-none">
      <div className="mx-auto max-w-6xl px-6 flex justify-end">
        <a
          href="https://wa.me/263775179744"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto"
        >
          <span className="relative block">
            <span className="absolute  -right-1 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl transition">
              <WhatsAppIcon size={40} className="text-[#25D366]" />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default FloatingWhatsApp;

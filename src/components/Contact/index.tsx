import ContactForm from "./ContactForm";
import ContactMap from "./Map";

export default function Contact() {
  return (
    <main className="contact naxatw-h-screen-nav naxatw-w-full">
      <div className="naxatw-flex naxatw-container naxatw-py-14 naxatw-gap-8">
        <div className="naxatw-w-[55%]">
          <ContactForm />
        </div>
        <div className="naxatw-w-[45%] naxatw-rounded-xl naxatw-overflow-hidden naxatw-border naxatw-border-primary">
          <ContactMap />
        </div>
      </div>
    </main>
  );
}

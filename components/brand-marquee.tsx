import { siTelefonica, siNvidia, siHuggingface, siMistralai } from "simple-icons";

const brandItems = [
  { name: "Microsoft", icon: "microsoft" },
  { name: "Telefónica", icon: siTelefonica },
  { name: "ALTER TECHNOLOGY · TÜV NORD", icon: "institution" },
  { name: "NVIDIA", icon: siNvidia },
  { name: "Hugging Face", icon: siHuggingface },
  { name: "Mistral AI", icon: siMistralai },
] as const;

function BrandItem({ name, icon }: (typeof brandItems)[number]) {
  return (
    <div className="brand-marquee-item">
      {typeof icon === "object" ? (
        <svg className="brand-marquee-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
      ) : icon === "microsoft" ? (
        <span className="microsoft-mark" aria-hidden="true"><i /><i /><i /><i /></span>
      ) : (
        <span className="institution-mark" aria-hidden="true"><i>AT</i></span>
      )}
      <span>{name}</span>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="brand-marquee-section" aria-label="Organizations and platforms">
      <div className="brand-marquee-label"><span>Across technology &amp; industry</span><i /></div>
      <div className="brand-marquee-viewport">
        <div className="brand-marquee-track">
          <div className="brand-marquee-group">
            {brandItems.map((brand) => <BrandItem key={brand.name} {...brand} />)}
          </div>
          <div className="brand-marquee-group" aria-hidden="true">
            {brandItems.map((brand) => <BrandItem key={`repeat-${brand.name}`} {...brand} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

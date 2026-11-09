import Image from "next/image";
import credits from "../../public/img/photos-judkins-2026-11-08/credits.json";

export default function Page() {
  return (
    <div className="page">
      <h2>Photos</h2>
      <p className="mb-4">Photos from a day of bike polo at Judkins Park.</p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {credits.photos.map((photo, index) => {
          const photographer = credits.photographers.find(
            (person) => person.id === photo.photographerId,
          );
          const preview = photo.url.replace(
            "/photos-judkins-2026-11-08/",
            "/photos-judkins-2026-11-08/previews/",
          ).replace(/\.jpg$/, ".webp");

          return (
            <a
              key={photo.url}
              href={photo.url}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[4/3] overflow-hidden bg-gray-900"
              aria-label={`Open photo ${index + 1} of ${credits.photos.length}${photographer ? ` by ${photographer.name}` : ""}`}
            >
              <Image
                src={preview}
                alt={photo.caption || "Bike polo at Judkins Park"}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

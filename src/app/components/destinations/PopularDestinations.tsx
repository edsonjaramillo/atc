import { MapItem } from '@/app/cms/types';
import { AttractionItem } from '@/app/components/destinations/AttractionItem';
import { Section } from '@/app/components/ui/Section';

type PopularAttractionsProps = {
  mapItems: MapItem[];
};

export function PopularAttractions({ mapItems }: PopularAttractionsProps) {
  return (
    <Section id="popular-attractions" headerAs="h2" headerText="Popular Attractions">
      <div className="grid grid-cols-attractions gap-2 rounded bg-grayscale-100 p-4 shadow-md">
        {mapItems.map((mapItem) => (
          <AttractionItem key={mapItem.id} mapItem={mapItem} />
        ))}
      </div>
    </Section>
  );
}

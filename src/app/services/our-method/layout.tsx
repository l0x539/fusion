import OurMethodsLayoutView from "@/components/views/OurMethodsLayoutView";

export default function OurMethodsLayout({ params: {id}, children }: { params: { id: '1' | '2' | '3' | '4' | '5' }, children: React.ReactNode }) {
  return <OurMethodsLayoutView id={id}>
    {children}
  </OurMethodsLayoutView>
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}

export const dynamic = 'force-static';
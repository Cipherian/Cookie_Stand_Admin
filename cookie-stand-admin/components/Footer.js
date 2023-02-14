
export default function Footer({formData}) {
  return (
    <footer className="p-5 flex items-center justify-left h-16 bg-lab-green fixed bottom-0 w-full">
      <p className="font-bold text-xl">{formData.length} stores created worldwide!</p>
    </footer>
  );
}
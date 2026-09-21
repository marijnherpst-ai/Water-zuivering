export default function RichText({ text }) {
  const delen = text.split('**');
  return delen.map((deel, i) => (i % 2 === 1 ? <strong key={i} className="text-ink">{deel}</strong> : deel));
}

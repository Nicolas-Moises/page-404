export default function Button(props) {
  return (
    <button className="bg-cyan-800 transition-colors py-3 px-6 relative rounded-lg text-semibold md:text-lg text-zinc-100 hover:bg-cyan-600 flex items-center gap-3">
      {props.icon}
      {props.title}
    </button>
  );
}

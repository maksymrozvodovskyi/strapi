interface RichTextNode {
  type: string;
  children?: { type: string; text: string }[];
}

export default function RichTextRenderer({
  content,
}: {
  content: RichTextNode[];
}) {
  return (
    <div className="prose max-w-none">
      {content.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i}>
              {block.children?.map((child, j) => (
                <span key={j}>{child.text}</span>
              ))}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

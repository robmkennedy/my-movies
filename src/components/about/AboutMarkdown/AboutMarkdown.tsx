import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const AboutMarkdown = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("about.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};

export default AboutMarkdown;
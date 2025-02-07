import invertHexColor from "../lib/invertHexColor";

function Footer({ color }: { color: string }) {
  return (
    <footer
      style={{
        backgroundColor: "transparent",
        textAlign: "right",
        position: "absolute",
        bottom: 0,
        width: "100%",
        color: invertHexColor(color),
      }}
    >
      <a
        href="https://iamalibaig.com"
        style={{ color: invertHexColor(color), textDecoration: "none" }}
      >
        Made By Ali B.
      </a>
      <span>{" 👾 "}</span>
    </footer>
  );
}

export default Footer;

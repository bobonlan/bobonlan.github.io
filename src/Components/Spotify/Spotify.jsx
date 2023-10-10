export function Spotify() {
  return (
    <div>
      <iframe
        style={{ borderRadius: "12px" }}
        src={
          "https://open.spotify.com/embed/playlist/20SHBwsHZpBZFmidW6WCR7?utm_source=generator"
        }
        width={"45%"}
        height={"156rem"}
        allowFullScreen={"true"}
        allow={
          "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        }
        loading={"lazy"}
        align={"left"}
      ></iframe>
    </div>
  );
}

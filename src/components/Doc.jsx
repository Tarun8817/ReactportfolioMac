import './doc.scss';

const Doc = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => setWindowsState(state => ({ ...state, github: true }))}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="github" />
      </div>

      <div
        onClick={() => setWindowsState(state => ({ ...state, note: true }))}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="note" />
      </div>

      <div
        onClick={() => setWindowsState(state => ({ ...state, resume: true }))}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="pdf" />
      </div>

      <div
        onClick={() => {window.open("https://calendar.google.com/","_blank")}}
        className="icon calendar"
      >
        <img src="/doc-icons/calender.svg" alt="calendar" />
      </div>

      <div
        onClick={() => setWindowsState(state => ({ ...state, spotify: true }))}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="spotify" />
      </div>

      <div
        onClick={() => {window.open("mailto:rajputtarun698@gmail.com")}}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="mail" />
      </div>

      <div
        onClick={() => window.open("https://www.linkedin.com/in/tarunraj21/","_blank")}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="link" />
      </div>

      <div
        onClick={() => setWindowsState(state => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="cli" />
      </div>
    </footer>
  );
};

export default Doc;
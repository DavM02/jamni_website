export default function CloseButton({ setAuth }) {
  return (
    <div className="close-auth-modal" onClick={() => setAuth(null)}>
      <span className="xxsmall-text text-main text-black">Close</span>
    </div>
  );
}

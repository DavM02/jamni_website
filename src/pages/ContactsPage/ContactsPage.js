import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
const ContactsSections = React.lazy(() => import("./ContactsSections"));
function ContactsPage() {
  return (
    <div id="contacts-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
      <ContactsSections />
      {/* </Suspense> */}
    </div>
  );
}
export default PageTransition(React.memo(ContactsPage));

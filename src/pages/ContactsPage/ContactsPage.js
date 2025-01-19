import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
// const ContactsSections = React.lazy(() => import("./ContactsSections"));
import ContactsSections from './ContactsSections'
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

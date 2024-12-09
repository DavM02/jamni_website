import Contacts from "../../components/sections/Contacts/Contacts";
import ContactForm from "../../components/sections/ContactsForm/ContactsForm";
function ContactsSections() {
  return (
    <>
      <Contacts />
      <ContactForm />
      <section id="company-info">
        <div className="container">
          <div className="row">
            <p className="xxxsmall-text text-main">
              Общество с ограниченной ответственностью «ПАРКИТЕКТУРА»
              <br /> ИНН 7736656972
              <br /> КПП 771701001
              <br /> ОГРН 1137746202417
              <br /> Юридический адрес: 129226, г. Москва, ул.
              Сельскохозяйственная, д12А, стр.6, 2 этаж, пом I, ком 12
              <br /> ОКПО 17255738
            </p>
            <p className="xxxsmall-text text-main">
              ОКТМО 459044000
              <br />
              ОКВЭД 01.41.2
              <br /> р/с 40702810702830000230 в АО «АЛЬФА-БАНК»
              <br /> к/с 30101810200000000593
              <br /> БИК 044525593
              <br /> Генеральный директор Кондратьева Елена Владимировна
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactsSections;

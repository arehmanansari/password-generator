import React, { useState } from "react";
import "../App.css";
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem
} from '@coreui/react';

const Dropdown = () => {
  const [language, setLanguage] = useState("en-us");

  return (
    <div className="dropdown">
      <CDropdown>
        <CDropdownToggle href="#" color="primary">Select Language</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem active={language === "en-us"} as="button" type="button" onClick={() => setLanguage("en-us")}>English - US</CDropdownItem>
          <CDropdownItem active={language === "fr-fr"} as="button" type="button" onClick={() => setLanguage("fr-fr")}>French - France</CDropdownItem>
          <CDropdownItem active={language === "cn-zh"} as="button" type="button" onClick={() => setLanguage("cn-zh")}>Spanish - Spain</CDropdownItem>
          <CDropdownItem active={language === "pt-por"} as="button" type="button" onClick={() => setLanguage("pt-por")}>Portuguese - Portugal</CDropdownItem>
          <CDropdownItem active={language === "de-de"} as="button" type="button" onClick={() => setLanguage("de-de")}>German - Germany</CDropdownItem>
          <CDropdownItem active={language === "it-it"} as="button" type="button" onClick={() => setLanguage("it-it")}>Italian - Italy</CDropdownItem>
          <CDropdownItem active={language === "ja-jp"} as="button" type="button" onClick={() => setLanguage("ja-jp")}>Japanese - Japan</CDropdownItem>
          <CDropdownItem active={language === "rus-ru"} as="button" type="button" onClick={() => setLanguage("rus-ru")}>Russian - Russia</CDropdownItem>
          <CDropdownItem active={language === "pk-ur"} as="button" type="button" onClick={() => setLanguage("pk-ur")}>Urdu - Pakistan</CDropdownItem>
          <CDropdownItem active={language === "pl-pol"} as="button" type="button" onClick={() => setLanguage("pl-pol")}>Polish - Poland</CDropdownItem>
          <CDropdownItem active={language === "in-hi"} as="button" type="button" onClick={() => setLanguage("in-hi")}>Spanish - Spain</CDropdownItem>
          <CDropdownItem active={language === "kr-ko"} as="button" type="button" onClick={() => setLanguage("kr-ko")}>Korean - Korea</CDropdownItem>
          <CDropdownItem active={language === "vn-vt"} as="button" type="button" onClick={() => setLanguage("vn-vt")}>Vietnamese - Veitnam</CDropdownItem>
          <CDropdownItem active={language === "sa-ar"} as="button" type="button" onClick={() => setLanguage("sa-ar")}>Arabic - Saudi Arabia</CDropdownItem>
          <CDropdownItem active={language === "tr-tur"} as="button" type="button" onClick={() => setLanguage("tr-tur")}>Turkish - Turkey</CDropdownItem>
          <CDropdownItem active={language === "id-in"} as="button" type="button" onClick={() => setLanguage("id-in")}>Indonesian - Indonesia</CDropdownItem>
          <CDropdownItem active={language === "nl-nl"} as="button" type="button" onClick={() => setLanguage("nl-nl")}>Dutch - Netherlands</CDropdownItem>
          <CDropdownItem active={language === "th-th"} as="button" type="button" onClick={() => setLanguage("th-th")}>Thai - Thailand</CDropdownItem>
          <CDropdownItem active={language === "hu-hu"} as="button" type="button" onClick={() => setLanguage("hu-hu")}>Hungarian - Hungary</CDropdownItem>
          <CDropdownItem active={language === "kz-kk"} as="button" type="button" onClick={() => setLanguage("kz-kk")}>Kazakh - Kazakhstan</CDropdownItem>
          <CDropdownItem active={language === "ph-fil"} as="button" type="button" onClick={() => setLanguage("ph-fil")}>Filipino - Philippines</CDropdownItem>
          <CDropdownItem active={language === "my-my"} as="button" type="button" onClick={() => setLanguage("my-my")}>Malay - Malaysia</CDropdownItem>
          <CDropdownItem active={language === "no-no"} as="button" type="button" onClick={() => setLanguage("no-no")}>Norwegian - Norway</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};

export default Dropdown;

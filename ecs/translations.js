const translations = {
  en: {
    nav: {
      vulnerability: 'Vulnerability',
      scenarios: 'Scenarios',
      architecture: 'Architecture',
      status: 'Status',
      contribute: 'Contribute',
      governance: 'Governance'
    },
    hero: {
      org: 'Pro Publico Bono · Open Source Crowd-Dev ! Invitation !',
      title: 'Essential <span class="thin">Crisis Software</span> Initiative',
      subtitle: 'Mesh P2P Modular System • Infrastructure for when main systems fail',
      lede: 'A modular alternative network communication framework and scenario-fitted utilities. Four scenarios. Four threat models. No product, no company, no founder in charge — an open build anyone can claim a piece of. This is an engineering initiative to build a backup, tools ready for troubled times.',
      ctaRepo: 'Open the repository',
      ctaClaim: 'Claim a problem',
      metaStatusLabel: 'STATUS ·',
      metaStatusValue: 'Pre-alpha (Blueprint validation)',
      metaCodeLabel: 'CODE WRITTEN ·',
      metaCodeValue: 'None (Plans and Technological Solutions)',
      metaArchitectureLabel: 'ARCHITECTURE ·',
      metaArchitectureValue: 'Defined - Ready',
      metaLicenseLabel: 'LICENSE ·',
      metaLicenseValue: 'AGPLv3 + commercial use CL',
      metaContributorsLabel: 'CONTRIBUTORS ·',
      metaContributorsValue: 'Just starting! Claim ownership share!'
    },
    gap: {
      kicker: 'The gap',
      heading: 'Nobody builds for the network being gone, supplies disrupted, for natural crisis or war - it\'s unprofitable situations. Yet, technology allows it.',
      sub: 'Everything you use assumes the infrastructure holds. Communication, Medical Help, Services, access to Food and Water, Navigation. Challenging that assumption isn\'t profitable — we have to stop waiting. One day You or your relatives can be in need of it -<strong> let\'s build the life saving system.</strong>',
      p1: 'Blackouts, backbone failures, solar events, supply-chain breaks, war. Each strips a different layer from the stack societies run on: connection, exchange, communication, payment. When it happens, there is currently nothing free, tested, and ready to deploy at scale.',
      p2: 'ECS is being built as infrastructure of last resort — a custom set system with scenario-specific presets, designed to work when nothing else does. It runs on the assumption that the people who need it will not be technical, will not have power, and will not have time to read a manual.',
      p3: 'The architecture is ready, plans for various depth of details are ready for experienced peers validation and tweaks.',
      p4: 'It\'s a holistic take on what I would need / like to have in 8 variants of scenarios — ready and guiding-by-hand on real life use. We need developers of various depth of insight, but also a wide range of specialists and skilled experts on survival and non-digital helpful in crisis skills, and individuals willing to help with more mundane tasks.',
      p5: 'It is open source because a system whose survival depends on one company, one server, or one person is not resilient. It is pro bono because the people who will need it cannot pay. It\'s modular to fit different possibilities and because multiplying possibilities is another principle of safety.',
      quoteText: 'Technology is open, waiting there. Blocks and architecture is there, and storm is coming. We need to make it real, <span>the open emergency ark.<br></span> Do you have better things to do? Even <span>MVP will save lives</span> - it\'s worth being made and distributed.',
      quoteLink: '→ Check: The Scenarios A-B-C-D'
    },
    scenarios: {
      kicker: 'Four scenarios',
      heading: 'Not one generic "offline mode."',
      sub: 'Each scenario assumes a different kind of threat volume, technology, and direness. Part of the project is scenarios repleted technical specification mapping, circumstances, user-available tech, power, and in-field time of usage.<br>A design that survives a blackout does not survive automated signal-hunting. So there are four, each with "light" and "hard" variants.',
      aTitle: 'Blackout / Dead-Internet',
      aText: 'ISP or backbone failure, regional outage. The network and most of communication is down; the hardware isn\'t. System and services somehow operate, no cashless payments. Nobody is hunting you, in the hard version criminal activity is high.',
      aThreatLine: 'Threat <b>Low</b> · Priority <b>High</b>',
      bTitle: 'Civilization Collapse',
      bText: 'Long-term systems, supply and manufacturing failure. Proxy comms, barter, resource coordination. Scavenged hardware mostly.<br>Encountered people can be helpful saviors, neutral, an active threat, or spreading illness.',
      bThreatLine: 'Threat <b>Medium</b> · Priority <b>Mid</b>',
      cTitle: 'Total War',
      cText: 'Automated signal scanning, active node hunting. Emitting is dangerous. Metadata is a target list. Impersonation / decoy possibility.<br><br> Grave threat level / complete spectrum monitoring. Long-range avoidance, disruptions, stealth.',
      cThreatLine: 'Threat <b>Highest</b> · Priority <b>Mid</b>',
      dTitle: 'Hybrid War',
      dText: 'Extreme hacker threat, compromised infrastructure, surveillance state, economy and net working more or less.<br><br> War mobility restrictions, emitting can be dangerous — various threat and seriousness levels, GPS and services can be temporarily unavailable.',
      dThreatLine: 'Threat <b>High</b> · Priority <b>Configurable</b>',
      extraA: 'Hackers, Natural Crisis, Small Solar Flare, Large Malfunction. The short to mid-term disruption of availability.',
      extraB: 'Carrington Event-like Solar Flare, Trade and Logistics Disruptions in the Global Economy, Fallout / World War 3.',
      extraC: 'AI-backed invasion, Military operations against civilians, Extinction Threat / All-in War / Homicide.',
      extraD: 'Anything the first three do not cover. Weaponization of all systems — not only digital.'
    },
    architecture: {
      kicker: 'Architecture',
      heading: 'Every layer encloses the next.',
      sub: 'Swap a plugin without touching the core. Swap a module without touching the framework. Nothing depends on one component, one build, or one person. Distributions consist of set-modules and verified plugins, but any combination / customization can be made.',
      l1: 'L1 — Outer',
      l2: 'L2',
      l3: 'L3',
      l4: 'L4 — Core',
      buildTitle: 'Build Package',
      buildDesc: 'Scenario-specific apps type composition: Client · NF relay node · PON pocket point · HQ',
      coreTitle: 'Core Framework',
      coreDesc: 'Routing, security, storage, device I/O, process management. Audited and frozen.',
      modulesTitle: 'Modules',
      modulesDesc: 'Communication · maps · community boards · reputation · data exchange · extra functionalities',
      pluginsTitle: 'Plugins',
      pluginsDesc: 'Encryption, compression, transmission, verification — swapped at runtime via the inject-matrix.',
      noteHeading: 'Trust escalates the same way access does',
      noteBody: 'You start by reading. You end — if the work earns it — inside the Black Box, where encryption and safety-critical modules live under gated review, in a repository separate from the public one.',
      public: 'Public',
      community: 'Community',
      verified: 'Verified',
      core: 'Core',
      vault: 'Vault'
    },
    status: {
      kicker: 'Where this actually is',
      heading: 'Nothing is built yet.',
      p1: 'That is not a warning. It is the offer. The architecture is drawn, the scenarios are specified, the license is written — and not one line of the framework exists. Every module, every plugin, every protocol decision in this system is currently unowned. If you join now, you are not maintaining someone else\'s code. You are deciding what it is.',
      p2: 'Claim your contribution and the possibility of revenue from commercial licenses / usage. At this point, everything is open to modification and discussion. You have the impact!',
      lines: 'Lines of framework code',
      scenarios: 'Scenarios specified',
      modules: 'Modules unclaimed'
    },
    tracks: {
      kicker: 'Who\'s needed',
      heading: 'Claim a problem. Not a job.',
      sub: 'Open an issue for the piece you want to own. No résumé, no interview, no gatekeeper. Every contributor is credited permanently, and earns a share if their module ever generates revenue.',
      intro: 'Not on the list? Open a discussion. If the problem is real, the track gets created.',
      cryptoTitle: 'Cryptographers & security engineers',
      cryptoText: 'Offline-first encryption with no real-time validation. Node authentication without a certificate authority. Post-quantum key exchange for a network that may need to outlive the state that attacked it.',
      distTitle: 'Distributed systems & P2P engineers',
      distText: 'Gossip protocols over links measured in bytes per minute. Byzantine fault tolerance where nodes lie on purpose. Consensus across clusters that may never reconnect.',
      hardwareTitle: 'Hardware & embedded specialists',
      hardwareText: 'Turning dead phones, routers, and salvaged components into relay nodes. Power harvesting. Builds that survive conditions the datasheet does not cover.',
      systemsTitle: 'Systems architects',
      systemsText: 'What does Scenario C actually cost in watts, latency, and emission risk? How does the network behave at 10% of nodes? At 1%? Graceful degradation is the whole discipline here.',
      docsTitle: 'Documentation & localisation',
      docsText: 'Instructions a frightened, non-technical person can follow with no power and no signal. In their language. An error here costs more than a bug does.',
      legalTitle: 'Governance, legal & organisers',
      legalText: 'Licensing that resists corporate capture. Contributor rights that survive the project outgrowing anyone. Onboarding a distributed volunteer base that has never met.',
      craftTitle: 'Craftsmen, specialists & experts',
      craftText: 'Historical and real-world skills helpful in any scenario — survival, crafts, manual skills, analog coding / communication, herbs, agriculture, medicine — guidelines and hints for real life for non-expert users.',
      orgTitle: 'Organizations, ambassadors & anyone willing to help',
      orgText: 'This project is huge and we need all the help possible — don\'t be shy! Let\'s do it! Because it is made for the public benefit, all kinds of organizations are welcome to help and use our software!'
    },
    governance: {
      kicker: 'Governance',
      heading: 'The moment one person is essential, resilience has already failed.',
      sub: 'This project is deliberately built without founder authority. That is not modesty — it is the same design principle as the mesh itself.',
      whoStarted: 'Who started it?',
      whoStartedText: 'Karol, a systems architect who got tired of waiting for someone else to build resilience infrastructure. He drew the blueprints and wrote the first documentation. That is the designed extent of it.',
      inCharge: 'Is he in charge?',
      inChargeText: 'No. No veto, not even author privilege. If the architecture is wrong, say so publicly — and it changes, or you fork it and build the better one. Only when the community is unable to conclude the decision, or in case of the idea of shutting down the project, Karol retains decisive voice.',
      decisions: 'How are decisions made?',
      decisionsText: 'Proposal → 72-hour minimum discussion → vote → logged → implemented by volunteers. The exact mechanism is still open, and shaping it is itself an unclaimed problem. I am planning to leave all governance to the community — under the banner of a to-be-established non-profit foundation for legal representation (for consideration).',
      contributors: 'What do contributors get?',
      contributorsText: 'Permanent credit on GitHub. Governance weight proportional to work done. Free use of the system in your own country. A revenue share if a module you built is ever licensed commercially.',
      licence: 'What\'s the licence?',
      licenceText: 'AGPLv3 for open and non-commercial use, globally. Commercial deployment requires a written agreement — specifically so that a corporation cannot enclose what a community built. Terms in <code>05_LICENSE.md</code>.',
      ai: 'And the AI policy?',
      aiText: 'Online AI must not be used on whole modules, files, or repositories. Locally run models only for Core Framework and Black Box work. Fragment-level help is fine.'
    },
    start: {
      kicker: 'How to start',
      heading: 'Five steps. No onboarding deck.',
      step1Title: 'Claim',
      step1Text: 'Open an issue for what you want to build — or take one already open.',
      step2Title: 'Publish Summary',
      step2Text: 'Give a technical specification of what you will build. Say who you are, and topics of possible future contributions.',
      step3Title: 'Build',
      step3Text: 'Submit the first pull request. It will be reviewed by the community, not by process.',
      step4Title: 'Get credited',
      step4Text: 'Your name in the contributor registry, permanently. Privacy and Security Team will be formed in the future and will extra-check all modules.',
      step5Title: 'Get a share',
      step5Text: 'If your module earns from commercial / governmental licensing, you earn — the amount will relate to commitment (impact + size) and distribution size ratio.',
      note: 'Exact measurement / AI or script use will be voted on and determined with exact licensing.'
    },
    closing: {
      heading: 'A person who gets an SOS message through during a real blackout won\'t ask for a résumé.',
      sub: 'They\'ll care that someone made connection possible when nothing else did. That someone hasn\'t shown up yet.',
      ctaRepo: 'Open the repository',
      ctaDiscuss: 'Start a discussion',
      aiTitle: 'AI POLICY —',
      aiBody: 'Do not use online AI on whole modules, files, or repositories. Only locally run models may be used in Core Framework and Black Box development. Fragment-level assistance is permitted. Unauthorized AI use and training is a license violation.',
      supportTitle: 'You can support me and my mission —',
      supportBody: 'by buying software or donating on: https://ko-fi.com/4community | https://ko-fi.com/s/158253d403 or just share information about some of the initiatives. Be blessed and thank you!',
      footerLabel: 'ECS — ESSENTIAL CRISIS SOFTWARE',
      footerFoundation: 'ENHANCED.WORLD FOUNDATION',
      footerAuthor: 'Karol Kwestarz-Maciejewski',
      footerRepo: 'REPO',
      footerContributing: 'CONTRIBUTING',
      footerIssues: 'ISSUES',
      footerDiscussions: 'DISCUSSIONS',
      footerContact: 'CONTACT',
      version: 'V1.01 · PRE-ALPHA',
      supportEmail: 'Support: research@enhanced.world'
    }
  },
  pl: {
    nav: {
      vulnerability: 'Ryzyko',
      scenarios: 'Scenariusze',
      architecture: 'Architektura',
      status: 'Status',
      contribute: 'Współtworzenie',
      governance: 'Zarządzanie'
    },
    hero: {
      org: 'Pro Publico Bono · Otwarta inicjatywa Crowd-Dev! Zaproszenie!',
      title: 'Inicjatywa Essential <span class="thin">Crisis Software</span>',
      subtitle: 'System Mesh P2P • Infrastruktura na wypadek awarii głównych systemów',
      lede: 'Alternatywny modułowy system komunikacji i narzędzia dopasowane do scenariuszy. Cztery scenariusze. Cztery modele zagrożeń. Jeszcze nic nie jest zbudowane — to otwarta inicjatywa, którą może przejąć każdy.',
      ctaRepo: 'Otwórz repozytorium',
      ctaClaim: 'Weź problem',
      metaStatusLabel: 'STATUS ·',
      metaStatusValue: 'Pre-alfa (walidacja blueprintu)',
      metaCodeLabel: 'KOD NAPISANY ·',
      metaCodeValue: 'Brak (plany i rozwiązania technologiczne)',
      metaArchitectureLabel: 'ARCHITEKTURA ·',
      metaArchitectureValue: 'Zdefiniowana — gotowa',
      metaLicenseLabel: 'LICENCJA ·',
      metaLicenseValue: 'AGPLv3 + klauzula użycia komercyjnego',
      metaContributorsLabel: 'WSPÓŁTWÓRCY ·',
      metaContributorsValue: 'Właśnie się zaczyna! Zgłoś udział własnościowy!'
    },
    gap: {
      kicker: 'Luka',
      heading: 'Nikt nie buduje systemu pod sytuację, gdy sieć znika, dostawy się załamują, a kryzys lub wojna stają się realne. A jednak technologia pozwala to zrobić.',
      sub: 'Wszystko, z czego korzystasz, zakłada, że infrastruktura przetrwa. Komunikacja, pomoc medyczna, usługi, dostęp do wody i żywności, nawigacja. To założenie nie jest już wystarczające — musimy przestać czekać. Kiedyś Ty albo Twoi bliscy możecie tego potrzebować. <strong>Zbudujmy system, który ratuje życie.</strong>',
      p1: 'Brak prądu, awarie szkieletu sieci, zdarzenia słoneczne, przerwy w łańcuchach dostaw, wojna. Każde z nich obiera inna warstwę infrastruktury, na której opiera się społeczeństwo: połączenie, wymiana, komunikacja, płatności. Gdy to nastąpi, dziś nie ma jeszcze nic darmowego, przetestowanego i gotowego do wdrożenia na szeroką skalę.',
      p2: 'ECS jest budowane jako infrastruktura ostateczności — własny zestaw systemów z presetami dopasowanymi do scenariuszy, zaprojektowany do działania wtedy, gdy wszystko inne zawodzi. Zakłada, że osoby, które go potrzebują, nie będą techniczne, nie będą miały prądu i nie będą miały czasu na czytanie instrukcji.',
      p3: 'Architektura jest gotowa, a plany dla wielu poziomów szczegółów są przygotowane do weryfikacji i poprawek przez doświadczonych współpracowników.',
      p4: 'To holistyczne spojrzenie na to, czego potrzebowałbym / czego chciałbym w 8 wariantach scenariuszy — gotowe i prowadzące krok po kroku w realnym użyciu. Potrzebujemy programistów o różnym poziomie wiedzy, ale także szerokiej grupy specjalistów i ekspertów od przetrwania, umiejętności pozadigitalnych oraz osób chętnych do pomocy w bardziej przyziemnych zadaniach.',
      p5: 'Jest open source, bo system, którego przetrwanie zależy od jednej firmy, jednego serwera albo jednej osoby, nie jest odporny. Jest pro bono, bo ludzie, którzy go będą potrzebować, nie będą mogli za niego zapłacić. Jest modularny, żeby pasować do różnych możliwości, a mnożenie możliwych wariantów jest kolejną zasadą bezpieczeństwa.',
      quoteText: 'Technologia jest już otwarta i czeka. Bloki i architektura są gotowe, a burza nadchodzi. Musimy to urzeczywistnić — <span>otwartą awaryjną arkę.<br></span> Masz lepsze rzeczy do roboty? Nawet <span>MVP uratuje życie</span> — warto to stworzyć i rozpowszechnić.',
      quoteLink: '→ Sprawdź: scenariusze A-B-C-D'
    },
    scenarios: {
      kicker: 'Cztery scenariusze',
      heading: 'Nie jeden ogólny „tryb offline”.',
      sub: 'Każdy scenariusz zakłada inny rodzaj zagrożenia, inną technologię i inną wagę sytuacji. Projekt obejmuje mapowanie specyfikacji, okoliczności, dostępnej technologii, energii i czasu działania w terenie.<br>System, który przetrwa blackout, nie przetrwa automatycznego tropienia sygnałów. Dlatego są cztery — każdy z wariantem „lekki” i „twardy”.',
      aTitle: 'Blackout / martwy internet',
      aText: 'Awaria ISP lub szkieletu sieci, lokalny brak łączności. Sieć i większość komunikacji są wyłączone, sprzęt nadal może działać. System i usługi działają tylko częściowo, brak płatności bezgotówkowych. Nikt cię nie ściga; w wersji trudnej przestępczość rośnie.',
      aThreatLine: 'Zagrożenie <b>Niskie</b> · Priorytet <b>Wysoki</b>',
      bTitle: 'Upadek cywilizacji',
      bText: 'Długotrwałe awarie systemów, dostaw i produkcji. Komunikacja zastępcza, barter, koordynacja zasobów. Głównie odzyskany sprzęt.<br>Ludzie, których spotkasz, mogą być pomocni, obojętni, wrogo nastawieni lub zakażeni.',
      bThreatLine: 'Zagrożenie <b>Średnie</b> · Priorytet <b>Średni</b>',
      cTitle: 'Wojna totalna',
      cText: 'Automatyczne skanowanie sygnałów i aktywne tropienie węzłów. Nadawanie jest niebezpieczne. Metadane to lista celów. Podszycie się i wabiki są możliwe.<br><br> Wysokie zagrożenie, pełne monitorowanie pasma. Unikanie na duże odległości, zakłócenia, obława.',
      cThreatLine: 'Zagrożenie <b>Najwyższe</b> · Priorytet <b>Średni</b>',
      dTitle: 'Wojna hybrydowa',
      dText: 'Ekstremalne zagrożenie hakerskie, skompromitowana infrastruktura, państwo nadzoru, gospodarka i sieć działają tylko w przybliżeniu.<br><br> Ruch jest ograniczony, a nadawanie może być śmiertelne — GPS i usługi mogą zawieść.',
      dThreatLine: 'Zagrożenie <b>Wysokie</b> · Priorytet <b>Elastyczny</b>',
      extraA: 'Hakerzy, kryzys naturalny, mała burza słoneczna, duża awaria. Krótkoterminowe lub średnioterminowe zakłócenia dostępności.',
      extraB: 'Zdarzenie typu Carrington, zakłócenia handlu i logistyki, fallout / III wojna światowa.',
      extraC: 'Inwazja wspierana przez AI, operacje wojskowe przeciw cywilom, zagrożenie wyginięciem / wojna totalna.',
      extraD: 'Cokolwiek, czego nie obejmują pierwsze trzy. Użytkowanie wszystkich systemów jako broni — nie tylko cyfrowych.'
    },
    architecture: {
      kicker: 'Architektura',
      heading: 'Każda warstwa obejmuje następną.',
      sub: 'Podmień plugin bez dotykania rdzenia. Podmień moduł bez dotykania frameworka. Nic nie zależy od jednego komponentu, jednego builda ani jednej osoby. Dystrybucje składają się z zestawów modułów i zweryfikowanych pluginów, ale każda kombinacja / personalizacja jest możliwa.',
      l1: 'L1 — Zewnętrzna',
      l2: 'L2',
      l3: 'L3',
      l4: 'L4 — Rdzeń',
      buildTitle: 'Pakiet builda',
      buildDesc: 'Kompozycja aplikacji dopasowanych do scenariusza: Klient · węzeł NF · punkt PON · HQ',
      coreTitle: 'Framework rdzenia',
      coreDesc: 'Routing, bezpieczeństwo, magazyn, I/O urządzeń, zarządzanie procesami. Audytowane i zamrożone.',
      modulesTitle: 'Moduły',
      modulesDesc: 'Komunikacja · mapy · tablice lokalne · reputacja · wymiana danych · dodatkowe funkcje',
      pluginsTitle: 'Pluginy',
      pluginsDesc: 'Szyfrowanie, kompresja, transmisja, weryfikacja — wymieniane w czasie działania przez inject-matrix.',
      noteHeading: 'Zaufanie rośnie tak samo jak dostęp',
      noteBody: 'Zaczynasz od czytania. Kończysz — jeśli praca na to zasłuży — wewnątrz Black Boxa, gdzie moduły szyfrowania i krytyczne dla bezpieczeństwa podlegają kontrolowanemu przeglądowi w repozytorium oddzielonym od publicznego.',
      public: 'Publiczne',
      community: 'Społeczność',
      verified: 'Zweryfikowane',
      core: 'Rdzeń',
      vault: 'Skarbiec'
    },
    status: {
      kicker: 'Gdzie to naprawdę jest',
      heading: 'Nic jeszcze nie jest zbudowane.',
      p1: 'To nie jest ostrzeżenie. To oferta. Architektura jest narysowana, scenariusze opisane, licencja napisana — a nie ma jeszcze ani jednej linii frameworka. Każdy moduł, każdy plugin i każda decyzja protokołu są obecnie nieprzypisane. Jeśli dołączysz teraz, nie utrzymujesz czyjegoś starego kodu. Ty decydujesz, czym to będzie.',
      p2: 'Zgłoś swój udział i możliwość przychodów z komercyjnych licencji / użytkowania. Na tym etapie wszystko jest otwarte na modyfikacje i dyskusję. Masz wpływ!',
      lines: 'Linie kodu frameworka',
      scenarios: 'Opisane scenariusze',
      modules: 'Niezajęte moduły'
    },
    tracks: {
      kicker: 'Kto jest potrzebny',
      heading: 'Weź problem. Nie pracę.',
      sub: 'Otwórz issue dla elementu, który chcesz przejąć. Żadnego CV, rozmowy, ani strażnika bram. Każdy współtwórca dostaje stałe uznanie i udział, jeśli jego moduł kiedykolwiek wygeneruje przychód.',
      intro: 'Nie ma cię na liście? Otwórz dyskusję. Jeśli problem jest realny, ślad zostanie utworzony.',
      cryptoTitle: 'Kryptografowie i inżynierowie bezpieczeństwa',
      cryptoText: 'Szyfrowanie offline-first bez walidacji w czasie rzeczywistym. Uwierzytelnianie węzłów bez urzędu certyfikacji. Wymiana kluczy post-kwantowych dla sieci, która może przetrwać państwo, które ją zaatakowało.',
      distTitle: 'Inżynierowie systemów rozproszonych i P2P',
      distText: 'Protokoły gossip przez połączenia mierzone w bajtach na minutę. Tolerancja błędów bizantyjskich, gdy węzły celowo kłamią. Konsensus w klastrach, które mogą nigdy się nie połączyć.',
      hardwareTitle: 'Specjaliści od sprzętu i embedów',
      hardwareText: 'Przerabianie martwych telefonów, routerów i odzyskiwanych komponentów na węzły przekaźnikowe. Zbieranie energii. Buildy przetrwające warunki, których nie obejmuje datasheet.',
      systemsTitle: 'Architekci systemów',
      systemsText: 'Ile naprawdę kosztuje Scenariusz C w waty, opóźnienia i ryzyko emisji? Jak zachowuje się sieć przy 10% węzłów? Przy 1%? Płynna degradacja to cała dyscyplina.',
      docsTitle: 'Dokumentacja i lokalizacja',
      docsText: 'Instrukcje, które przestraszona, nietechniczna osoba może wykonać bez prądu i bez sygnału. W jej języku. Błąd tutaj kosztuje więcej niż błąd w kodzie.',
      legalTitle: 'Zarządzanie, prawo i organizatorzy',
      legalText: 'Licencjonowanie odporne na przejęcie przez korporacje. Prawa współtwórców, które przetrwają projekt przewyższający kogokolwiek. Przyjmowanie rozproszonej bazy wolontariuszy, która nigdy się nie spotkała.',
      craftTitle: 'Rzemieślnicy, specjaliści i eksperci',
      craftText: 'Historyczne i realne umiejętności przydatne w każdym scenariuszu — przetrwanie, rzemiosło, umiejętności manualne, analogowa komunikacja, zioła, rolnictwo, medycyna — wskazówki i wytyczne dla użytkowników bez specjalistycznej wiedzy.',
      orgTitle: 'Organizacje, ambasadorzy i każdy chętny',
      orgText: 'Ten projekt jest ogromny i potrzebujemy każdej możliwej pomocy — nie bądź nieśmiały! Zróbmy to! Ponieważ jest stworzony dla dobra publicznego, wszystkie rodzaje organizacji są mile widziane przy pomocy i używaniu naszego oprogramowania!'
    },
    governance: {
      kicker: 'Zarządzanie',
      heading: 'Gdy jedna osoba staje się niezbędna, odporność już zawiodła.',
      sub: 'Ten projekt jest świadomie zbudowany bez autorytetu założyciela. To nie skromność — to ten sam princip projektowy co w mesh.',
      whoStarted: 'Kto to zaczął?',
      whoStartedText: 'Karol, architekt systemów, który miał dość czekania, aż ktoś inny zbuduje infrastrukturę odporności. Narysował blueprinty i napisał pierwszą dokumentację. To jest zaprojektowany zakres jego roli.',
      inCharge: 'Czy jest szefem?',
      inChargeText: 'Nie. Żadnego veta, nawet przywileju autora. Jeśli architektura jest zła, mów o tym publicznie — i zostaje zmieniona albo tworzysz fork i budujesz lepszą wersję. Tylko gdy społeczność nie potrafi dojść do decyzji albo gdy pojawia się pomysł zamknięcia projektu, Karol zachowuje decydujący głos.',
      decisions: 'Jak podejmowane są decyzje?',
      decisionsText: 'Propozycja → minimum 72 godziny dyskusji → głosowanie → logowanie → wdrażanie przez wolontariuszy. Dokładny mechanizm jest nadal otwarty, a jego ukształtowanie jest samo w sobie nieprzypisanym problemem. Planuję zostawić całe zarządzanie społeczności — pod flagą przyszłej fundacji non-profit do reprezentacji prawnej (do rozważenia).',
      contributors: 'Co dostają współtwórcy?',
      contributorsText: 'Stałe uznanie na GitHubie. Waga w zarządzaniu proporcjonalna do pracy. Darmowe użycie systemu we własnym kraju. Udział w przychodach, jeśli moduł zostanie kiedykolwiek licencjonowany komercyjnie.',
      licence: 'Jaka jest licencja?',
      licenceText: 'AGPLv3 dla użytku otwartego i niekomercyjnego na całym świecie. Wdrożenie komercyjne wymaga pisemnej umowy — szczególnie po to, by korporacja nie mogła zamknąć tego, co zbudowała społeczność. Warunki w <code>05_LICENSE.md</code>.',
      ai: 'A polityka AI?',
      aiText: 'Online AI nie może być używane na całych modułach, plikach ani repozytoriach. Lokalne modele tylko do pracy nad Core Framework i Black Box. Pomoc na poziomie fragmentu jest dozwolona.'
    },
    start: {
      kicker: 'Jak zacząć',
      heading: 'Pięć kroków. Bez decku onboardingowego.',
      step1Title: 'Weź',
      step1Text: 'Otwórz issue dla tego, co chcesz zbudować — albo wybierz już otwarte.',
      step2Title: 'Opublikuj podsumowanie',
      step2Text: 'Podaj specyfikację techniczną tego, co zbudujesz. Napisz, kim jesteś i jakie masz przyszłe tematy współpracy.',
      step3Title: 'Buduj',
      step3Text: 'Wyślij pierwszy pull request. Zostanie sprawdzony przez społeczność, a nie przez proces.',
      step4Title: 'Zdobądź uznanie',
      step4Text: 'Twoje imię w rejestrze współtwórców na stałe. Zespół Prywatności i Bezpieczeństwa powstanie w przyszłości i dodatkowo sprawdzi wszystkie moduły.',
      step5Title: 'Zdobądź udział',
      step5Text: 'Jeśli Twój moduł zarobi na licencjonowaniu komercyjnym / rządowym, dostaniesz udział — jego wysokość będzie związana z zaangażowaniem (wpływ + rozmiar) i skalą dystrybucji.',
      note: 'Dokładne pomiary / użycie AI lub skryptów będą głosowane i określone przez dokładną licencję.'
    },
    closing: {
      heading: 'Osoba, która dostanie wiadomość SOS w prawdziwym blackoutcie, nie zapyta o CV.',
      sub: 'Zainteresuje ją, że ktoś zrobił połączenie możliwe wtedy, gdy wszystko inne zawiodło. Taki ktoś jeszcze się nie pojawił.',
      ctaRepo: 'Otwórz repozytorium',
      ctaDiscuss: 'Rozpocznij dyskusję',
      aiTitle: 'POLITYKA AI —',
      aiBody: 'Nie używaj zewnętrznego AI na całych modułach, plikach ani repozytoriach. Tylko lokalnie uruchomione modele mogą być używane przy pracy nad Core Framework i Black Box. Pomoc na poziomie fragmentów jest dozwolona. Nieautoryzowane użycie AI i trening jest naruszeniem licencji.',
      supportTitle: 'Możesz mnie wesprzeć i moją misję —',
      supportBody: 'kupując oprogramowanie albo dokonując darowizn na: https://ko-fi.com/4community | https://ko-fi.com/s/158253d403 albo po prostu dzieląc się informacją o niektórych inicjatywach. Niech będzie błogosławieństwo i dziękuję!',
      footerLabel: 'ECS — ESSENTIAL CRISIS SOFTWARE',
      footerFoundation: 'ENHANCED.WORLD FOUNDATION',
      footerAuthor: 'Karol Kwestarz-Maciejewski',
      footerRepo: 'REPO',
      footerContributing: 'WSPÓŁTWORZENIE',
      footerIssues: 'ISSUES',
      footerDiscussions: 'DYSKUSJE',
      footerContact: 'KONTAKT',
      version: 'V1.01 · PRE-ALFA',
      supportEmail: 'Wsparcie: research@enhanced.world'
    }
  }
};

const defaultLanguage = 'en';
const supportedLanguages = Object.keys(translations);

function getValueByKey(bundle, key) {
  return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), bundle);
}

function applyTranslations(lang) {
  const selectedLang = translations[lang] ? lang : defaultLanguage;
  const bundle = translations[selectedLang];
  document.documentElement.lang = selectedLang;
  document.documentElement.setAttribute('data-lang', selectedLang);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValueByKey(bundle, element.getAttribute('data-i18n'));
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = getValueByKey(bundle, element.getAttribute('data-i18n-html'));
    if (typeof value === 'string') {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const active = button.getAttribute('data-lang') === selectedLang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  localStorage.setItem('ecs-lang', selectedLang);
}

function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('ecs-lang');
  const initialLang = savedLang && translations[savedLang] ? savedLang : defaultLanguage;
  applyTranslations(initialLang);

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.getAttribute('data-lang');
      applyTranslations(nextLang);
    });
  });
}

initLanguageSwitcher();

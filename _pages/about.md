---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<section class="about-hero" aria-labelledby="about-hero-title">
  <div class="about-hero__copy">
    <p class="about-hero__eyebrow">Research focus</p>
    <h1 id="about-hero-title">Hi! 👋 I am Miaozhang Shen</h1>
    <p class="about-hero__positioning">I develop physics-informed magnetic localization and sensing systems for medical robotics, with a focus on embedded sensor arrays, real-time systems, and reliable feedback under interference.</p>
    <ul class="research-keywords" aria-label="Research keywords">
      <li>Magnetic localization &amp; sensing</li>
      <li>Medical robotics</li>
      <li>Electromagnetic modeling</li>
      <li>Embedded sensor arrays &amp; real-time systems</li>
      <li>Interference-robust feedback</li>
    </ul>
  </div>
  <figure class="about-hero__media">
    <img src="/images/vascular-magnetic-localization.webp" alt="Transparent vascular phantom over a magnetic sensor array for magnetic localization" width="1800" height="1350" decoding="async" fetchpriority="high">
    <figcaption>Magnetic localization in a vascular phantom over a sensor array</figcaption>
  </figure>
</section>

Hello! Welcome to my website. My name is **Miaozhang Shen**, but you can also call me **Leo**. I come from  [Chaozhou, China.](https://en.wikipedia.org/wiki/Chaozhou) 


I received my B.S. degree in Measurement Control Technology and Instrumentation from [**Shenzhen University**](https://en.szu.edu.cn/) [(深圳大学物理与光电工程学院)](https://cpoe.szu.edu.cn/en/index.htm) in 2022. Currently, I am pursuing an M.S. degree in Electronic Information in the Department of Electronic and Electrical Engineering at the [**Southern University of Science and Technology (SUSTech)**](https://www.sustech.edu.cn/en/) [(南方科技大学电子与电气工程系)](https://eee.sustech.edu.cn/team-tructure.aspx?cid=84) in Shenzhen, starting from 2024.

My supervisor is [Prof. Shuxiang Guo (郭书祥)](https://faculty.sustech.edu.cn/?tagid=guosx&iscss=1&snapid=1&orderby=date&go=2&lang=en) (IEEE Fellow, Fellow of Engineering Academy of Japan). I also serve as a teaching assistant for Prof. Guo. [Welcome to GUO Lab!](http://www.guolab.org)


My work connects electromagnetic modeling with embedded sensor arrays and real-time systems. I study trustworthy localization and feedback-controlled release under interference, with applications in vascular intervention and wireless capsule endoscopy.

<figure class="about-campus-note">
  <img src="/images/DJI_20251120180653.webp" alt="Sunset over the SUSTech campus in Shenzhen" width="1200" height="676" loading="lazy" decoding="async">
  <figcaption>SUSTech campus, Shenzhen · DJI aerial photo</figcaption>
</figure>

<!-- **I am actively seeking a Ph.D. position in related fields to begin in Fall 2027.** -->
<span class='anchor' id='-news'></span>

# 🔥 News {#news}

<div class="news-latest" markdown="1">

- *Jul. 2026*: &nbsp;🎉🎉 Our collaborative paper "Physics-Informed Deep Optics: Chromatic Aberrations for Monocular Depth Estimation" was accepted by Optics Express.
- *May. 2026*: &nbsp;🎉🎉 Our paper "A Real-Time Anomaly Detection and Directional Warning Method for Magnetic Surgical Navigation" was accepted by IEEE ICMA 2026.
- *Apr. 2026*: &nbsp;🎉🎉 Our paper "A Physics-Informed Residual Learning Method for Real-Time 5-DoF Magnetic Localization in Capsule Endoscopy" was accepted by IEEE Transactions on Industrial Informatics.

</div>

<details class="news-archive" markdown="1">
<summary>Earlier news <span class="news-archive__count">8 updates</span></summary>

- *Mar. 2026*: &nbsp;🎉🎉 Honored to receive the SUSTech Outstanding Graduate Teaching Assistant Award (Fall 2025; sole recipient in the department).
- *Jan. 2026*: &nbsp;🎉🎉 Our paper "Navigation and Load Adaptability of a Flatworm-Inspired Soft Robot Actuated by Staggered Magnetization Structure" was accepted by Biomimetics.
- *Dec. 2025*: &nbsp;🎉🎉 Honored to be recognized as one of the 💎**TOP 3** contributors in Guolab.
- *Sep. 2025*: &nbsp;🎉🎉 Honored to receive the SUSTech Outstanding Graduate Research Assistant Award **(Top 20% in department)**.
- *Aug. 2025*: &nbsp;🎉🎉 Our paper "Asymmetric double-layer compact metasurfaces based on phase-progressive diffractive networks" was accepted by Optics Communications.
- *Jun. 2025*: &nbsp;🎉🎉 Our paper "Physics-Informed Residual Network for Magnetic Dipole Model Correction and High-Accuracy Localization" was accepted by IEEE IROS 2025.
- *Jun. 2025*: &nbsp;🎉🎉 Our paper "Differential Magnetic Sensing with Dynamic Background Calibration for the Capsule Robot Localization in Dynamic Environments" was accepted by IEEE ICMA 2025.
- *Jun. 2025*: &nbsp;🎉🎉 Our paper "A Novel Flexible Soft Robotic-Bandage for Gastrointestinal Wound Coverage Function" was accepted by IEEE ICMA 2025.

</details>


<span class='anchor' id='publications'></span>

# 📝 Selected Publications

Representative first-author publications. Additional publications are listed below; the complete record is also available on [Google Scholar](https://scholar.google.com/citations?user=KT1uO6cAAAAJ&hl).

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TII</div><img src='images/TII-2026.webp' alt="Experimental platform and tracking results for physics-informed magnetic localization" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Physics-Informed Residual Learning Method for Real-Time 5-DoF Magnetic Localization in Capsule Endoscopy](https://doi.org/10.1109/TII.2026.3688686)

**Shen, M.**, Guo, S., Wang, Z. et al.

*IEEE Transactions on Industrial Informatics*, 2026
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IROS 2025</div><img src='images/IROS2025.webp' alt="Physics-informed residual network architecture for magnetic dipole model correction" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Physics-Informed Residual Network for Magnetic Dipole Model Correction and High-Accuracy Localization](https://doi.org/10.1109/IROS60139.2025.11246085)

**Shen, M.**, Guo, S., Wang, Z. et al.

*2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)*, Hangzhou, China
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE ROBIO 2026</div><img src='images/robio_photo_overlay_concept.webp' alt="Magnetic surgical navigation anomaly detection and directional warning method" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Magnetic Distal-Orientation Feedback for Topology-Guided Robotic Guidewire Branch Entry](https://github.com/ShenMiaozhang/shenmiaozhang.github.io/blob/main/images/paper/robio2026_draft.pdf)

**Shen, M.**, Wang, Z., Guo, S., et al. (Under Review)

*2026 IEEE International Conference on Robotics and Biomimetics (ROBIO)*, Tengchong, China.
</div>
</div>


# 📚 Other Publications

Collaborative and co-authored publications.

<!-- ======================================================== Publications: 2026 ============================================================================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Optics Express</div><img src='images/Optics_Express2026.jpg' alt="Physics-informed deep optics pipeline for monocular depth estimation" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Physics-Informed Deep Optics: Chromatic Aberrations for Monocular Depth Estimation](https://opg.optica.org/oe/abstract.cfm?doi=10.1364/OE.608898)

Yuyue Yang, **Miaozhang Shen**, et al.

*Optics Express*, Accepted 2026.7.30
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE ICMA 2026</div><img src='images/icma2026.webp' alt="Magnetic surgical navigation anomaly detection and directional warning method" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Real-Time Anomaly Detection and Directional Warning Method for Magnetic Surgical Navigation](https://doi.org/10.1109/ICMA69663.2026.11647428)

**Shen, M.**, Guo, S. et al.

*2026 IEEE International Conference on Mechatronics and Automation (ICMA)*, Changchun, China
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Biomimetics</div><img src='images/biomimetics2026.webp' alt="Flatworm-inspired soft robot with a staggered magnetization structure" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Navigation and Load Adaptability of a Flatworm-Inspired Soft Robot Actuated by Staggered Magnetization Structure](https://doi.org/10.3390/biomimetics11010041)

Wang, Z. **Shen, M.**, Guo, S. et al.

*Biomimetics*, Published 2026.1.6
</div>
</div>

<!-- ======================================================== Publications: 2025 ============================================================================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Optics Communications</div><img src='images/Optics_Communications2025.webp' alt="Asymmetric double-layer compact metasurface design" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Asymmetric double-layer compact metasurfaces based on phase-progressive diffractive networks](https://doi.org/10.1016/j.optcom.2025.132376)

Yang, Y., Azad, F., Huang, Z., **Shen, M.**, Su, S.

*Optics Communications*, Published 2025.8.25
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICMA 2025</div><img src='images/ICMA2025.webp' alt="Differential magnetic sensing system for capsule robot localization" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Differential Magnetic Sensing with Dynamic Background Calibration for the Capsule Robot Localization in Dynamic Environments](https://doi.org/10.1109/ICMA65362.2025.11120690)

**Shen, M.**, Guo, S., Wang, Z., et al.

*2025 IEEE International Conference on Mechatronics and Automation (ICMA)*, Beijing, China
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICMA 2025</div><img src='images/ICMA2025-1.webp' alt="Flexible soft robotic bandage for gastrointestinal wound coverage" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Novel Flexible Soft Robotic-Bandage for Gastrointestinal Wound Coverage Function](https://doi.org/10.1109/ICMA65362.2025.11120828)

Wang, Z., **Shen, M.**, Guo, S. et al.

*2025 IEEE International Conference on Mechatronics and Automation (ICMA)*, Beijing, China
</div>
</div>

# 🎖 Honors and Awards
- *2026* SUSTech Outstanding Graduate Teaching Assistant Award (Fall 2025; **sole recipient in the department**).
- *2025* SUSTech Outstanding Graduate Research Assistant Award **(Top 20% in department)**
- *2021* **1st Place (National)**, National College Students Optoelectronic Design Competition
- *2021* **1st Prize (Provincial)**, 12th "Lanqiao Cup" Software and IT Competition, Guangdong
- *2021* Shenzhen University Liyuan Star Scholarship **(Top 5% Scholarship)**
- *2020* Principal Investigator, Guangdong Provincial Undergraduate Innovation Training Program (¥10k Grant)
- *2019-2021* Multiple university honors including Excellent Student Leader and Innovation Star Scholarships

<span class='anchor' id='-educations'></span>

# 📖 Education {#education}

<div class="education-grid">
  <article class="education-card education-card--sustech">
    <a class="education-card__logo-wrap" href="https://www.sustech.edu.cn/en/" aria-label="Visit the SUSTech website">
      <img class="education-card__logo" src="/images/education/sustech-logo.png" alt="SUSTech emblem" width="260" height="260" loading="lazy" decoding="async">
    </a>
    <div class="education-card__body">
      <p class="education-card__period"><time datetime="2024-09">Sep. 2024</time> – <time datetime="2027-06">Jun. 2027 (Expected)</time></p>
      <h2><a href="https://www.sustech.edu.cn/en/">Southern University of Science and Technology</a></h2>
      <p class="education-card__degree">M.S. in Electronic Information</p>
      <p class="education-card__location">Shenzhen, China</p>
    </div>
  </article>

  <article class="education-card education-card--szu">
    <a class="education-card__logo-wrap" href="https://en.szu.edu.cn/" aria-label="Visit the Shenzhen University website">
      <img class="education-card__logo" src="/images/education/shenzhen-university-logo.png" alt="Shenzhen University emblem" width="86" height="86" loading="lazy" decoding="async">
    </a>
    <div class="education-card__body">
      <p class="education-card__period"><time datetime="2018-09">Sep. 2018</time> – <time datetime="2022-06">Jun. 2022</time></p>
      <h2><a href="https://en.szu.edu.cn/">Shenzhen University</a></h2>
      <p class="education-card__degree">B.Eng. in Measurement Control Technology and Instrumentation</p>
      <p class="education-card__location">Shenzhen, China</p>
    </div>
  </article>
</div>

<span class='anchor' id='-professional-experience'></span>
<span class='anchor' id='-internships'></span>

# 💻 Experience {#experience}

<ol class="experience-timeline">
  <li class="experience-timeline__item">
    <article class="experience-timeline__card">
      <div class="experience-timeline__meta">
        <span><time datetime="2023-04">Apr. 2023</time> – <time datetime="2024-08">Aug. 2024</time></span>
        <span class="experience-timeline__kind">Professional</span>
      </div>
      <h2>Embedded Software Engineer</h2>
      <p class="experience-timeline__organization"><a href="https://www.makextool.com/">Shenzhen Makeblock Co., Ltd.</a></p>
      <ul>
        <li>Engineered embedded firmware for a consumer-grade desktop laser engraving machine (MCU &amp; SOC platform).</li>
        <li>Solved modular tool recognition issues by implementing a pressure and magnetic dual-sensor fusion scheme, leading to two patent applications.</li>
      </ul>
    </article>
  </li>

  <li class="experience-timeline__item">
    <article class="experience-timeline__card">
      <div class="experience-timeline__meta">
        <span><time datetime="2021-12">Dec. 2021</time> – <time datetime="2022-10">Oct. 2022</time></span>
        <span class="experience-timeline__kind">Research</span>
      </div>
      <h2>Research Assistant</h2>
      <p class="experience-timeline__organization">Shenzhen University · College of Physics and Optoelectronic Engineering</p>
      <ul>
        <li>Developed embedded software and hardware for a Battery Management System (BMS) utilizing ultrasonic inspection.</li>
        <li>Designed and implemented sensor fusion algorithms for state-of-charge (SoC) estimation, enhancing measurement stability.</li>
      </ul>
    </article>
  </li>

  <li class="experience-timeline__item">
    <article class="experience-timeline__card">
      <div class="experience-timeline__meta">
        <span><time datetime="2021-07">Jul. 2021</time> – <time datetime="2021-08">Aug. 2021</time></span>
        <span class="experience-timeline__kind">Internship</span>
      </div>
      <h2>Internship</h2>
      <p class="experience-timeline__organization"><a href="https://www.aiutechnology.com/">AIUTechnology</a> · China</p>
    </article>
  </li>

  <li class="experience-timeline__item">
    <article class="experience-timeline__card">
      <div class="experience-timeline__meta">
        <span><time datetime="2020-07">Jul. 2020</time> – <time datetime="2021-07">Jul. 2021</time></span>
        <span class="experience-timeline__kind">Leadership</span>
      </div>
      <h2>Founder and Student Chair</h2>
      <p class="experience-timeline__organization">Innovation Laboratory · Shenzhen University</p>
      <ul>
        <li>Founded and managed the college's first student-led scientific innovation laboratory, leading technical training sessions.</li>
        <li>Mentored teams for science events, resulting in multiple provincial and national competition awards.</li>
      </ul>
    </article>
  </li>
</ol>

# 🛠️ Skills {#skills}
- **Programming:** ⌨️C/C++, Python, MATLAB
- **Tools/Software:** 🧰PyTorch, Keil, Altium Designer (PCB), SolidWorks, LaTeX
- **Hardware/Systems:** 🤖MCU/SOC, Sensor Integration, PCB Design, UAV, Battery Management Systems (BMS)
- **Languages:** 🌐Mandarin (Native), Teochew (Native), English (CET-6)
- **Interests:** 🧑‍✈️Flight Simulation, 🛩️Drone Design/Prototyping, 📸Photography

# 🚀 Projects {#projects}

<section class="visitor-footprint" aria-labelledby="visitor-footprint-title">
  <div class="visitor-footprint__header">
    <div>
      <p class="visitor-footprint__eyebrow">Visitor footprint</p>
      <h2 id="visitor-footprint-title">A small window to the world</h2>
      <p class="visitor-footprint__intro">See where visitors are joining from. Locations are approximate and update as new visits arrive.</p>
    </div>
    <span class="visitor-footprint__status"><span aria-hidden="true"></span>Live map</span>
  </div>
  <div class="visitor-footprint__widget" role="region" aria-label="Live visitor map">
    <script type="text/javascript" id="mapmyvisitors" src="https://mapmyvisitors.com/map.js?d=z9T0WZAF31LnLqbEGRFQ8asgtU5JJTensL-Nb4GD68I&amp;cl=ffffff&amp;w=a"></script>
    <noscript>Enable JavaScript to view the visitor map.</noscript>
  </div>
  <p class="visitor-footprint__note">Approximate country-level activity · <a href="https://mapmyvisitors.com/b/policy" target="_blank" rel="noopener noreferrer">MapMyVisitors privacy policy</a></p>
</section>

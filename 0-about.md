<h3> Welcome to my website! </h3>

<p>
My name is Carmen and I am a <a href="https://schmidtsciencefellows.org"> Schmidt Science Fellow</a>. I am affiliated with <a href="https://stanfordasl.github.io//people/prof-marco-pavone/">Prof. Marco Pavone's group</a> at <a href="https://www.stanford.edu">Stanford</a>, where I work at the intersection of Control Theory and AI. To learn more about my research, head over to the <a href="research/">Research tab</a>!
</p>

<p>
Before joining Stanford, I spent a year as a postdoctoral fellow at the <a href="https://ai.ethz.ch">AI Center at ETH Zurich</a>. I obtained a Ph.D. in <a href="https://www.cms.caltech.edu/academics/grad/grad_cds">Control and Dynamical Systems</a> from <a href="https://www.caltech.edu">Caltech</a>, where I worked under the advice of <a href="http://www.cds.caltech.edu/~doyle/wiki/index.php?title=Main_Page">Prof. John Doyle</a>. My research has been awarded the <a href="https://youtu.be/TW7A8K2Ui24?t=9523" class="footnote-ref-extended" id="fnref3">best Ph.D. dissertation of the year at Caltech<span class="footnote-tooltip fn1"><strong>2023</strong> Milton and Francis Clauser Doctoral Prize</span></a>, as well as with <span class="footnote-ref-extended" id="fnref1">two IEEE best paper awards<span class="footnote-tooltip fn2"><strong>2024</strong> Best Paper Award at IEEE Transactions on Control of Network Systems<br><strong>2022</strong> Best Student Paper Award at the IEEE International Conference on Control & Automation</span></span>. My work has also been recognized for its <span class="footnote-ref-extended" id="fnref3">interdisciplinary contributions<span class="footnote-tooltip fn3"><strong>2025</strong> Rising Star in Brain and Cognitive Science (MIT)<br><strong>2022</strong> Rising Star in Electrical Engineering and Computer Science (UT Austin)<br><strong>2022</strong> Rising Star in Cyber-Physical Systems (U Virginia)</span></span> as well as its <span class="footnote-ref-extended" id="fnref4">societal impact<span class="footnote-tooltip fn4"><strong>2025</strong> Emerson Consequential Scholar<br><strong>2025</strong> Stanford Impact Labs Fellow</span></span>. I am also very grateful for the <span class="footnote-ref-extended" id="fnref5">multiple fellowships<span class="footnote-tooltip fn5"><strong>2024</strong> Schmidt Science Fellowship<br><strong>2023</strong> ETH AI Center Postdoctoral Fellowship<br><strong>2021</strong> Amazon AI4Science Fellowship<br><strong>2019</strong> D. E. Shaw Exploration Fellowship</span></span> that have partially funded my research. 
</p>

<p>
I am very proud to be a member of the academic community. I am a strong believer that access to education is a fundamental right, and that an educated society is a more equitable and inclusive one. In my teaching and mentoring, I strive to create a <span class="footnote-ref-extended" id="fnref6">welcoming and supportive environment<span class="footnote-tooltip fn6"><strong>2022</strong> Fellow of the LEAP Alliance</span></span>. Beyond academia, I also feel a strong responsibility to the broader public: I participate in <span class="footnote-ref-extended" id="fnref7">outreach<span class="footnote-tooltip fn7"><strong>2023</strong> Instructor for Clubes de Ciencia (Merida, Mexico)</span></span> and <span class="footnote-ref-extended" id="fnref8">science-policy<span class="footnote-tooltip fn8"><strong>2025</strong> Engagement and Education Officer at Stanford Science Policy Group</span></span> programs (check out my <a href="teaching/">Teaching tab</a> to learn more!). I am also committed to making my research accesible to anyone who is interested in learning about it. I upload presentations of my papers as <a href="https://www.youtube.com/channel/UCLCJ7kcGJ-yxTg503E3JQaw">Youtube videos</a> for those who prefer watching over reading, and I always make myself available to discuss research:<a href= "mailto:camoalon@stanford.edu"> feel free to reach out!</a> <!-- I also believe that in order for research to be more accessible, it must be easily reproducible. You can find the code needed to reproduce my papers linked in my <a href="publications/">Publications tab</a>. --> 
</p>


<hr style="border: 0; border-top: 2px solid #ccc; margin: 2em 0;">

<div id="recent-news">
  <h2>News</h2>

  <h3> I am on the academic job market! Please <a href="mailto:camoalon@stanford.edu">reach out</a> if you think I could be a good fit for your department.</h3>
  
  <div id="news-scroll-container" style="max-height: 400px; overflow-y: auto; border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #fafafa;">
    <div id="news">
      {% assign news_posts = site.posts | where_exp: "post", "post.path contains 'news/_posts'" %}
      {% for post in news_posts limit:30 %}
      <div class="news-item">
        <div class="news-date">{{ post.date | date: "%Y %b" }}</div>
        <div class="news-separator"></div>
        <div class="news-content">{{ post.content }}</div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

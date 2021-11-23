function tech() {
  localStorage.setItem("news", "tech-news");
}
function food() {
  localStorage.setItem("news", "food-news");
}
function race() {
  localStorage.setItem("news", "race-news");
}
function cricket() {
  localStorage.setItem("news", "cricket-news");
}
function football() {
  localStorage.setItem("news", "football-news");
}
const news = localStorage.getItem("news");
const newsDetails = document.getElementById("newsDetails");
if (news.includes("tech-news")) {
  newsDetails.innerHTML = `  <div class="newsDetails">
  <div>
      <h1 class="title" >What's new in 2022 Tech</h1>
      <img
        src="https://source.unsplash.com/600x400/?computer"
        alt="card__image"
        width="600"
      />
    </div>
    <div>
      <p>
      Predicting the future is hard and risky. Predicting the future in the computing industry is even harder and riskier due to dramatic changes in technology and limitless challenges to innovation. Only a small fraction of innovations truly disrupt the state of the art. Some are not practical or cost-effective, some are ahead of their time, and some simply do not have a market. There are numerous examples of superior technologies that were never adopted because others arrived on time or fared better in the market. Therefore this document is only an attempt to better understand where technologies are going. The book The Innovator’s Dilemma and its sequels best describe the process of innovation and disruption.In 2014, a team of technical leaders from the IEEE Computer Society joined forces to write a technical report, entitled IEEE CS 2022, surveying 23 technologies that could potentially change the landscape of computer science and industry by the year 2022. In particular, this report focused on 3D printing, big data and analytics, the open intellectual property movement, massively online open courses, security cross-cutting issues, universal memory, 3D integrated circuits, photonics, cloud computing, computational biology and bioinformatics, device and nanotechnology, sustainability, high-performance computing, the Internet of Things, life sciences, machine learning and intelligent systems, natural user interfaces, networking and inter-connectivity, quantum computing, software-defined networks, multicore, and robotics for medical care.
      </p>
    </div>
</div>`;
} else if (news.includes("food-news")) {
  newsDetails.innerHTML = `  <div class="newsDetails">
  <div>
      <h1 class="title" >Delicious Food</h1>
      <img
        src="https://source.unsplash.com/600x400/?food"
        alt="card__image"
        width="600"
      />
    </div>
    <div>
      <p>
      Corn -- the workhorse of the industrial world -- is best when its sweet variety is fried up with lashings of butter till it bursts and then snarfed in greasy fistfuls while watching Netflix late at night.A crispy, rice-batter crepe encases a spicy mix of mashed potato, which is then dipped in coconut chutney, pickles, tomato-and-lentil-based sauces and other condiments. It's a fantastic breakfast food that'll keep you going till lunch, when you'll probably come back for another.It's unclear when and where the potato chip was born. US legend has it that they were invented in New York in 1853, but the earliest known recipe for "Potatoes Fried in Slices or Shavings" appears in a bestselling 1817 cookbook by Englishman William Kitchiner.
      Whatever the case, they're now one of the world's most child-friendly and best foods. But think of them this way -- if a single chip cost, say, $5, it'd be a far greater (and more popular) delicacy than caviar, a prize worth fighting wars over.The sea is lapping just by your feet, a warm breeze whips the tablecloth around your legs and a steamy pan of paella sits in front of you. Shrimp, lobster, mussels and cuttlefish combine with white rice and various herbs, oil and salt in this Valencian dish to send you immediately into holiday mode. Though if you have it in Spain, you're probably there already.
      </p>
    </div>
</div>`;
} else if (news.includes("race-news")) {
  newsDetails.innerHTML = `  <div class="newsDetails">
  <div>
      <h1 class="title" >Race to your heart content</h1>
      <img
        src="https://source.unsplash.com/600x400/?car,automobile"
        alt="card__image"
        width="600"
      />
    </div>
    <div>
      <p>
      Since it entered Formula E five years ago, Jaguar Racing has methodically moved its way up the grid and transformed from back of the grid strugglers to one of the championship’s most formidable teams.With the likes of Audi, BMW and Mercedes departing the all-electric series, Jaguar remains as an increasingly-bigger keystone in the championship.Jaguar makes long-term commitment to Formula .This is made all the more significant when you look at Jaguar’s bold road car plan of becoming an all-electric car brand in less than four years time.It’s a statement that gives Jaguar arguably more reason than any other manufacturer to be in Formula E, with plenty of crossover technology between its Jaguar I-Type 5 Formula E powertrain and its leading luxury electric road cars like the Jaguar I-Pace.All of that crossover technology is useful, but Jaguar is also a racing team and it wants to win – something it probably should have done more of in recent years.The team’s debut season featured just six points finishes but it was FE’s first completely new entry since the inaugural race and the best was yet to come.Its signing of season one champion Nelson Piquet Jr was useful to expand its understanding of the intricacies of the championship – in particular, energy management, something crucial to Piquet’s 2014/15 title campaign with the NEXTEV outfit – but it was GP2 stalwart Mitch Evans who would become the team’s lead driver.
      </p>
    </div>
</div>`;
} else if (news.includes("cricket-news")) {
  newsDetails.innerHTML = `  <div class="newsDetails">
  <div>
      <h1 class="title" >Bangladesh vs Pakistan</h1>
      <img
        src="https://source.unsplash.com/600x400/?cricket"
        alt="card__image"
        width="600"
      />
    </div>
    <div>
      <p>
      Uncapped players Mahmudul Hasan and Rejaur Rahman have been picked in the Bangladesh squad for the first Test against Pakistan that will get underway on November 26 in Chattogram. Taskin Ahmed was not considered as he required stitches on his hand due to an injury sustained in the third T20 against Pakistan.Opener Tamim Iqbal, who has been eyeing a comeback following multiple injuries, has not made the cut for the opening Test. Even though star allrounder Shakib Al Hasan has been picked in the squad, his fitness will be assessed before the game.21-year-old Mahmudul's elevation to the national squad comes on the back of his stellar performances in the first-class circuit. He has already hit two centuries in the ongoing National Cricket League, thus making an excellent start to his career. With Taskin and Shoriful Islam sidelined due to injuries, the selectors added Rejaur Rahman to the squad. The 22-year-old has so far picked 33 wickets in 10 games."It is still early days for him but Mahmudul has showed good temperament for the longer version," Chairman of the National Selection Panel, Minhajul Abedin said. "He is also an in-form batsman. With injury concerns to Taskin (Ahmed) and Shoriful (Islam), we needed to keep our pace bowling options open and Raja got the nod. We have been monitoring his performances in first class competitions. He is strong and energetic and has a knack for taking wickets."

      "There is a fair bit of experience if you consider that Mominul (Haque), Mushfiqur (Rahim), Shakib, Taijul (Islam) and Miraz (Mehidy Hasan) are all part of the squad. We will obviously have to wait to see if Shakib makes it for the first Test but these players have been the most consistent performers for us in Tests and their presence can make a difference."
      </p>
    </div>
</div>`;
} else if (news.includes("football-news")) {
  newsDetails.innerHTML = `  <div class="newsDetails">
  <div>
      <h1 class="title" >Laliga Match</h1>
      <img
        src="https://source.unsplash.com/600x400/?football"
        alt="card__image"
        width="600"
      />
    </div>
    <div>
      <p>
      Robert Lewandowski is in the running to retain his Best FIFA Men's Player award after he was named Monday on an 11-man shortlist alongside Karim Benzema and Jorginho. Perennial candidates Lionel Messi and Cristiano Ronaldo feature among the nominees, with Neymar, Mohamed Salah and Kylian Mbappe also up for a prize first awarded in 2017. Erling Haaland, N'Golo Kante and Kevin De Bruyne complete the list of potential winners. Four Barcelona players are included on the women's best player shortlist - Alexia Putellas, Jennifer Hermoso, Aitana Bonmati and Caroline Graham Hansen.

      Chelsea, beaten by Barcelona in last season's Women's Champions League final, also have four representatives with Sam Kerr, Ji So-yun, Magdalena Eriksson and Pernille Harder.
      
      Lucy Bronze, who took home last year's award, was nominated with fellow England international Ellen White.
      
      Canada's Olympic gold medallist Christine Sinclair is in contention too, as is Stina Blackstenius of Sweden.
      
      Thomas Tuchel is a frontrunner for best men's coach after leading Chelsea to the Champions League title. He faces competition from Roberto Mancini, the mastermind of Italy's Euro 2020 triumph.
      
      Other nominees are Hansi Flick, Pep Guardiola, Antonio Conte, Diego Simeone and Argentina boss Lionel Scaloni.
      
      The prizes for the best men's and women's player, coach and goalkeeper are voted for by the captains and coaches of all national teams around the world, as well as an online ballot of fans and a select number of journalists.
      
      Voting will run from November 22 to December 10.
      </p>
    </div>
</div>`;
}

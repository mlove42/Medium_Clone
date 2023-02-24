from app.models import db, Story, environment, SCHEMA


# Adds a demo story, you can add other stories here if you want
def seed_stories():
    story1 = Story(
       title= "ChatGPT in an iOS Shortcut",
       body="Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.Josh had spent year and year accumulating the information. He knew it inside out and if there was ever anyone looking for an expert in the field, Josh would be the one to call. The problem was that there was nobody interested in the information besides him and he knew it. Years of information painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic. There were two things that were important to Tracey. The first was her dog. Anyone that had ever met Tracey knew how much she loved her dog. Most would say that she treated it as her child. The dog went everywhere with her and it had been her best friend for the past five years. The second thing that was important to Tracey, however, would be a lot more surprising to most people. She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind. No matter how hard he tried, he couldn't give her a good explanation about what had happened. It didn't even really make sense to him. All he knew was that he froze at the moment and no matter how hard he tried to react, nothing in his body allowed him to move. It was as if he had instantly become a statue and although he could see what was taking place, he couldn't move to intervene. He knew that wasn't a satisfactory explanation even though it was the truth.",
       brief="Ever since I tried ChatGPT and GPT-3, everything else feels painfully dumb and useless.",
       estimated_read=8,
       image="https://miro.medium.com/fit/c/400/268/1*OVhfYqPzT-biY3G6tU17xA.jpeg",
       user_id=1,
       
      
       )
   
    story2 = Story(
       title= "Why Lunar New Year Matters",
       body="Sometimes it just doesn't make sense. The man walking down the street in a banana suit. The llama standing in the middle of the road. The fairies dancing in front of the car window. The fact that all of this was actually happening and wasn't a dream. There were about twenty people on the dam. Most of them were simply walking and getting exercise. There were a few who were fishing. There was a family who had laid down a blanket and they were having a picnic. It was like this most days and nothing seemed out of the ordinary. The problem was that nobody noticed the water leaking through the dam wall.",
       brief="It’s that time of the year again. Lunar New Year. A time to forge ahead, a time for renewal, and to usher in good fortune. A time to...",
       estimated_read=4,
       image="https://miro.medium.com/fit/c/400/268/1*S4_PumSAywyb2vjUVbbczA.jpeg",
       user_id=6,
       
      
       )
    story3 = Story(
       title= "Diary of a Brand: Blank Street Coffee",
       body="She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.",
        brief="Blank Street isn’t a coffee shop.",
       estimated_read=9,
       image="https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg",
       user_id=2,
       
      
       )
    story4 = Story(
       title= "Genesis",
       body="Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told. Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.",
       brief="First story created",
       estimated_read=5,
       image="https://images.squarespace-cdn.com/content/v1/5c37ce5b266c0732fe42dde3/1635278680227-4K2WH2JMX819T6NIEYMJ/Genesis+%5EF+In+the+Beginning.jpg",
       user_id=3,
       
      
       )
    story5 = Story(
       title= "How the West was Won",
       body="This is the story of Bel-air...",
       brief="First Print orgin story",
       estimated_read=10,
       image="https://ca-times.brightspotcdn.com/dims4/default/8bd65d0/2147483647/strip/true/crop/5260x3446+0+0/resize/1486x974!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9a%2F6f%2F960c36f949b09f292294d93c397c%2Fimage-15.jpg",
       user_id=4,
       
     
       )
    story6 = Story(
       title= "The new Wikipedia that took the whole village",
       body="She didn't like the food. She never did. She made the usual complaints and started the tantrum he knew was coming. But this time was different. Instead of trying to placate her and her unreasonable demands, he just stared at her and watched her meltdown without saying a word. The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but couldn't make out exactly what the yelling was about. That was exactly why she had put them on. She knew her mom would enter her room at any minute, and she could pretend that she hadn't heard any of the previous yelling. I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes. She didn't understand how changed worked. When she looked at today compared to yesterday, there was nothing that she could see that was different. Yet, when she looked at today compared to last year, she couldn't see how anything was ever the same. He read about a hike called the incline in the guidebook. It said it was a strenuous hike and to bring plenty of water. “A beautiful hike to the clouds” described one review. “Not for the faint-hearted,” said another. “Not too bad of a workout”, bragged a third review. I thought I’d hike it when I fly in from Maryland on my day off from the senior citizen's wellness conference. I hiked 2 miles a day around the neighborhood so I could handle a 1.1-mile hike. What a foolish mistake that was for a 70-year-old low-lander. He scolded himself for being so tentative. He knew he shouldn't be so cautious, but there was a sixth sense telling him that things weren't exactly as they appeared. It was that weird chill that rolls up your neck and makes the hair stand on end. He knew that being so tentative could end up costing him the job, but he learned that listening to his sixth sense usually kept him from getting into a lot of trouble. The shoes had been there for as long as anyone could remember. In fact, it was difficult for anyone to come up with a date they had first appeared. It had seemed they'd always been there and yet they seemed so out of place. Why nobody had removed them was a question that had been asked time and again, but while they all thought it, nobody had ever found the energy to actually do it. So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another. Out of another, I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.",
       brief="All the other things we changed in addition to Wikipedia’s look",
       estimated_read=5,
       image="https://miro.medium.com/fit/c/400/268/1*EYh6l6A7c6ec-PK8AJchTQ.png",
       user_id=5,
       
      
       )
    story7 = Story(
       title= "20 Entertaining Uses of ChatGPT",
       body="The house was located at the top of the hill at the end of a winding road. It wasn't obvious that the house was there, but everyone in town knew that it existed. They were just all too afraid to ever go and see it in person. MaryLou wore the tiara with pride. There was something that made doing anything she didn't really want to do a bit easier when she wore it. She really didn't care what those staring through the window were thinking as she vacuumed her apartment. He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and again tried to imagine it was the first time. It was hidden under the log beside the stream. It had been there for as long as Jerry had been alive. He wasn't sure if anyone besides him and his friends knew of its existence. He knew that anyone could potentially find it, but it was well enough hidden that it seemed unlikely to happen. The fact that it had been there for more than 30 years attested to this. So it was quite a surprise when he found the item was missing. Debbie had taken George for granted for more than fifteen years now. He wasn't sure what exactly had made him choose this time and place to address the issue, but he decided that now was the time. He looked straight into her eyes and just as she was about to speak, turned away and walked out the door. He stepped away from the mic. This was the best take he had done so far, but something seemed missing. Then it struck him all at once. Visuals ran in front of his eyes and music rang in his ears. His eager fingers went to work in an attempt to capture his thoughts hoping the results would produce something that was at least half their glory. No matter how hard he tried, he couldn't give her a good explanation about what had happened. It didn't even really make sense to him. All he knew was that he froze at the moment and no matter how hard he tried to react, nothing in his body allowed him to move. It was as if he had instantly become a statue and although he could see what was taking place, he couldn't move to intervene. He knew that wasn't a satisfactory explanation even though it was the truth. She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work? Life isn't always beautiful. That was a lesson that Dan was learning. He also realized that life wasn't easy. This had come as a shock since he had lived a charmed life. He hated that this was the truth and he struggled to be happy knowing that his assumptions weren't correct. He wouldn't realize until much later in life that the difficult obstacles he was facing that were taking away the beauty in his life at this moment would ultimately make his life much more beautiful. All he knew was that at this moment was that life isn't always beautiful. I inadvertently went to See's Candy last week (I was in the mall looking for phone repair), and as it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation, I may not find myself wandering dreamily back into a See's Candy any time soon. He watched as the young man tried to impress everyone in the room with his intelligence. There was no doubt that he was smart. The fact that he was more intelligent than anyone else in the room could have been easily deduced, but nobody was really paying any attention due to the fact that it was also obvious that the young man only cared about his intelligence.  Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy. Ants used the vine as their private highway, avoiding all the creases and crags of the bark, to freely move at top speed from top to bottom or bottom to top depending on their current chore. At least this was the way it was supposed to be. Something had damaged the vine overnight halfway up the tree leaving a gap in the once pristine ant highway. I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again! There were little things that she simply could not stand. The sound of someone tapping their nails on the table. A person chewing with their mouth open. Another human imposing themselves into her space. She couldn't stand any of these things, but none of them compared to the number one thing she couldn't stand which topped all of them combined. Although Scott said it didn't matter to him, he knew deep inside that it did. They had been friends as long as he could remember and not once had he had to protest that something Joe apologized for doing didn't really matter. Scott stuck to his lie and insisted again and again that everything was fine as Joe continued to apologize. Scott already knew that despite his words accepting the apologies that their friendship would never be the same. She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning? There was a time in his life when her rudeness would have set him over the edge. He would have raised his voice and demanded to speak to the manager. That was no longer the case. He barely reacted at all, letting the rudeness melt away without saying a word back to her. He had been around long enough to know where rudeness came from and how unhappy the person must be to act in that way. All he could do was feel pity and be happy that he didn't feel the way she did to lash out like that. I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips. It's better with both kinds. It comes out pretty bad with just the dark chocolate. The best add-ins are crushed almonds and marshmallows -- what you get from that is Rocky Road. It takes about twenty minutes from start to fridge, and then it takes about six months to work off the twenty pounds you gain from eating it. All things in moderation, friends. All things in moderation. She tried to explain that love wasn't like pie. There wasn't a set number of slices to be given out. There wasn't less to be given to one person if you wanted to give more to another. That after a set amount was given out it would all disappear. She tried to explain this, but it fell on deaf ears. 'Begin today!' That's all the note said. There was no indication from where it came or who may have written it. Had it been meant for someone else? Meghan looked around the room, but nobody made eye contact back. For a brief moment, she thought it might be a message for her to follow her dreams, but ultimately decided it was easier to ignore it as she crumpled it up and threw it away.",
       brief="Our RISE community has been on fire, exploring the breathtaking possibilities of ChatGPT.",
       estimated_read=8,
       image="https://miro.medium.com/fit/c/400/268/1*QwO6GCIJEUFahytmP9wWoA.jpeg",
       user_id=6,
       
      
       )
    story8 = Story(
       title= "Inclusive Design for the 2023 Lunar New Year",
       body="Lunar New Year celebrations are significant for Sino cultures, with many shared rituals to ring in the new year and prepare for the coming of spring — like decorating with red and gold, lighting fireworks to ward off evil spirits, gifting red envelopes with 'lucky money,' and deep cleaning their homes to rid their lives of lousy luck. You might also be familiar with the 12-animal 'Chinese Zodiac' associated with the Lunar New Year, where each year marks the transition from one animal to the next. In 2023, some will celebrate The Year of the Rabbit. But our friends in Vietnamese communities will celebrate this coming Lunar New Year with a different furry friend. For them, 2023 (and every 12 years) is The Year of the Cat. This is my creative journey to uncover why this is the case.",
       brief="Hopping and pouncing into the new year with two furry zodiacs",
       estimated_read=7,
       image="https://miro.medium.com/max/1400/1*qshjaVzbtHBx5eI0BsH1Gw.webp",
       user_id=7,
       
     
       )

    db.session.add(story1)
    db.session.add(story2)
    db.session.add(story3)
    db.session.add(story4)
    db.session.add(story5)
    db.session.add(story6)
    db.session.add(story7)
    db.session.add(story8)
   
    db.session.commit()



def undo_stories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.stories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM stories")
        
      
        
    db.session.commit()
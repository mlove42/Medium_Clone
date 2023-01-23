from app.models import db, Story, environment, SCHEMA


# Adds a demo story, you can add other stories here if you want
def seed_stories():
    story1 = Story(
       title= "ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant",
       body="This is the beginning of something special",
       brief="Ever since I tried ChatGPT and GPT-3, everything else feels painfully dumb and useless: Siri, Alexa, Google Home and all other",
       estimated_read=8,
       image="https://miro.medium.com/fit/c/400/268/1*OVhfYqPzT-biY3G6tU17xA.jpeg",
       user_id=1,
       
      
       )
    story2 = Story(
       title= "Inclusive Design for the 2023 Lunar New Year",
       body="This is the story of Bel-air...",
       brief="Hopping and pouncing into the new year with two furry zodiacs",
       estimated_read=7,
       image="https://miro.medium.com/fit/c/400/268/1*qshjaVzbtHBx5eI0BsH1Gw.png",
       user_id=7,
       
     
       )
    story3 = Story(
       title= "We’re Not All The Same: Why Lunar New Year Matters",
       body="this will be long",
       brief="It’s that time of the year again. Lunar New Year. A time to forge ahead, a time for renewal, and to usher in good fortune. A time to...",
       estimated_read=4,
       image="https://miro.medium.com/fit/c/400/268/1*S4_PumSAywyb2vjUVbbczA.jpeg",
       user_id=6,
       
      
       )
    story4 = Story(
       title= "Diary of a Brand: Blank Street Coffee",
       body="Let's take a deep dive",
        brief="Blank Street isn’t a coffee shop. It’s a thesis on the future of brand discovery.",
       estimated_read=9,
       image="https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg",
       user_id=2,
       
      
       )
    story5 = Story(
       title= "Genesis",
       body="This is the beginning of something special",
       brief="First story created",
       estimated_read=5,
       image="https://images.squarespace-cdn.com/content/v1/5c37ce5b266c0732fe42dde3/1635278680227-4K2WH2JMX819T6NIEYMJ/Genesis+%5EF+In+the+Beginning.jpg",
       user_id=3,
       
      
       )
    story6 = Story(
       title= "How the West was Won",
       body="This is the story of Bel-air...",
       brief="First Print orgin story",
       estimated_read=10,
       image="https://ca-times.brightspotcdn.com/dims4/default/8bd65d0/2147483647/strip/true/crop/5260x3446+0+0/resize/1486x974!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9a%2F6f%2F960c36f949b09f292294d93c397c%2Fimage-15.jpg",
       user_id=4,
       
     
       )
    story7 = Story(
       title= "The new Wikipedia appearance that took the whole village",
       body="this will be long",
       brief="All the other things we changed in addition to Wikipedia’s look",
       estimated_read=5,
       image="https://miro.medium.com/fit/c/400/268/1*EYh6l6A7c6ec-PK8AJchTQ.png",
       user_id=5,
       
      
       )
    story8 = Story(
       title= "20 Entertaining Uses of ChatGPT You Never Knew Were Possible",
       body="Let's take a deep dive",
       brief="Our RISE community has been on fire, exploring the breathtaking possibilities of ChatGPT. The uses of ChatGPT are simply endless",
       estimated_read=8,
       image="https://miro.medium.com/fit/c/400/268/1*QwO6GCIJEUFahytmP9wWoA.jpeg",
       user_id=6,
       
      
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
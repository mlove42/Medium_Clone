from app.models import db, Story, environment, SCHEMA


# Adds a demo story, you can add other stories here if you want
def seed_stories():
    story1 = Story(
       title= "Genesis",
       body="This is the beginning of something special",
       brief="First story created",
       estimated_read=5,
       image="https://images.squarespace-cdn.com/content/v1/5c37ce5b266c0732fe42dde3/1635278680227-4K2WH2JMX819T6NIEYMJ/Genesis+%5EF+In+the+Beginning.jpg",
       user_id=1,
       
      
       )
    story2 = Story(
       title= "How the West was Won",
       body="This is the story of Bel-air...",
       brief="First Print orgin story",
       estimated_read=10,
       image="https://ca-times.brightspotcdn.com/dims4/default/8bd65d0/2147483647/strip/true/crop/5260x3446+0+0/resize/1486x974!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9a%2F6f%2F960c36f949b09f292294d93c397c%2Fimage-15.jpg",
       user_id=2,
       
     
       )
    story3 = Story(
       title= "Jack In Jill",
       body="this will be long",
       brief="The truth",
       estimated_read=5,
       image="https://images.squarespace-cdn.com/content/v1/5c37ce5b266c0732fe42dde3/1635278680227-4K2WH2JMX819T6NIEYMJ/Genesis+%5EF+In+the+Beginning.jpg",
       user_id=1,
       
      
       )
    story4 = Story(
       title= "Back to the future",
       body="Let's take a deep dive",
        brief="The future",
       estimated_read=8,
       image="https://images.squarespace-cdn.com/content/v1/5c37ce5b266c0732fe42dde3/1635278680227-4K2WH2JMX819T6NIEYMJ/Genesis+%5EF+In+the+Beginning.jpg",
       user_id=1,
       
      
       )
    db.session.add(story1)
    db.session.add(story2)
    db.session.add(story3)
    db.session.add(story4)
   
    db.session.commit()



def undo_stories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.stories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM stories")
        
      
        
    db.session.commit()
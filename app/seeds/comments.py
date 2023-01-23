from app.models import db, Comment, environment, SCHEMA

def seed_comments():
    one = Comment(
        user_id=1,
        story_id=1, 
        body='Why, what a moving story!'
    )
    two = Comment(
        user_id=2,
        story_id=1, 
        body="I'm so proud of you"
    )
    three = Comment(
        user_id=3,
        story_id=1, 
        body="Continue to share your stories.  This is much needed"
    )

    four = Comment(
        user_id=1,
        story_id=2, 
        body="First to comment"
    )
    five = Comment(
        user_id=3,
        story_id=2, 
        body="I can't wait for part 2!!!"
    )


    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)

    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")


    db.session.commit()

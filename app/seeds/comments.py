from app.models import db, Comment, environment, SCHEMA

def seed_comments():
    one = Comment(
        user_id=2,
        story_id=1, 
        body='Wow, what a moving story!'
    )
    two = Comment(
        user_id=1,
        story_id=2, 
        body="I'm so proud of you"
    )
    three = Comment(
        user_id=3,
        story_id=1, 
        body="Continue to share your stories.  This is much needed"
    )

    four = Comment(
        user_id=4,
        story_id=1, 
        body="You should write a book on this topic"
    )
    five = Comment(
        user_id=5,
        story_id=3, 
        body="Two thumbs up!"
    )
    six = Comment(
        user_id=2,
        story_id=2, 
        body="You are truly gifted!"
    )
    seven = Comment(
        user_id=3,
        story_id=4, 
        body="I would love to read more of your writings!"
    )
    eight = Comment(
        user_id=2,
        story_id=5, 
        body="Awesome!"
    )

    eight = Comment(
        user_id=4,
        story_id=3, 
        body="Best article I have read in a long time"
    )


    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)

    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")


    db.session.commit()

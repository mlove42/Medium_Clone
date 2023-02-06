from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want

doctor = User(
        username='doctor', email='doctor@aa.io', first_name="Doctor",  last_name="Strange", biography= "The doctors of doctors", profile_pic="https://lumiere-a.akamaihd.net/v1/images/g_marvelswhatif_disneyplus_photo09_21535_d465c0c8.jpeg",
        password='password')

panther = User(
        username='panther', email='panther@aa.io', first_name="T'Challa", last_name="BP", biography="GOAT", profile_pic="https://assets1.ignimgs.com/thumbs/userUploaded/2021/9/14/whatifmidseasonblog-1631627826968.jpg", password='password')
fury = User(
        username='fury', email='fury@aa.io', first_name="Nick", last_name="Fury", biography="BOSS", profile_pic="https://emi9d8rzue7.exactdn.com/wp-content/uploads/2021/08/nick1200.jpg", password='password')
gamora = User(
        username='gamora', email='gamora@aa.io', first_name="Gamora", last_name="Zen", biography="WARRIOR", profile_pic="https://cdn.vox-cdn.com/thumbor/paLL9CBWe3ZojmoCp31R31MD1Wk=/0x0:1714x856/1200x800/filters:focal(720x291:994x565)/cdn.vox-cdn.com/uploads/chorus_image/image/69960731/gamora_what_if_episode.0.jpg", password='password')

ironman = User(
        username='ironman', email='ironman@aa.io', first_name="Tony", last_name="Stark", biography="LEADER",profile_pic="https://images.indianexpress.com/2021/08/what-if-episode-3-tony-stark-1200.jpg",
         password='password')
thanos = User(
        username='thanos', email='thanos@aa.io', first_name="Thanos", last_name="Dione", biography="VILLIAN", profile_pic="https://www.looper.com/img/gallery/the-big-thanos-question-mcu-fans-have-about-what-if-episode-8/intro-1632963190.jpg",
         password='password')
demo = User(
        username='demo', email='demo@aa.io', first_name="Demo", last_name="User", biography="TEST",
         password='password')
def seed_users():
    db.session.add(doctor)
    db.session.add(panther)
    db.session.add(fury)
    db.session.add(gamora)
    db.session.add(ironman)
    db.session.add(thanos)
    db.session.add(demo)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()
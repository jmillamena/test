#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Post, friendship_table

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")

        # db.session.query(User).delete()
        # db.session.query(Post).delete()

        # db.session.query(friendship_table).delete()

        # db.session.commit()

        # # Seed code goes here!
        # print("Seeding Complete")

db.users.insertMany([
  {
    "user-id": 1,
    "name": "user1",
    "email": "user1@gmail.com",
    "mentor-id": 1,
  },
  {
    "user-id": 2,
    "name": "user2",
    "email": "user2@gmail.com",
    "mentor-id": 1,
  },
  {
    "user-id": 3,
    "name": "user3",
    "email": "user3@gmail.com",
    " mentor-id": 1,
  },
  {
    "user-id": 4,
    "name": "user4",
    "email": "user4@gmail.com",
    "mentor-id": 2,
  },
  {
    "user-id": 5,
    "name": "user5",
    "email": "user5@gmail.com",
    "mentor-id": 2,
  },
]);



db.codekata.insertMany([
  {
    "user-id": 1,
    "no_of_problems_solved": 10,
  },
  {
    "user-id": 2,
    "no_of_problems_solved": 20,
  },
  {
    "user-id": 3,
    "no_of_problems_solved": 30,
  },
  {
    "user-id": 4,
    "no_of_problems_solved": 40,
  },
  {
    "user-id": 5,
    "no_of_problems_solved": 50,
  },
]);

db.topics.insertMany([
  {
    "topic_id": 1,
    "topic": "HTML",
    "topic_date": new Date("2021-10-01"),
  },
  {
    "topic_id": 2,
    "topic": "CSS",
    "topic_date": new Date("2021-10-10"),
  },
  {
    "topic_id": 3,
    "topic": "Javascript",
    "topic_date": new Date("2021-10-15"),
  },
  {
    "topic_id": 4,
    "topic": "React",
    "topic_date": new Date("2021-10-20"),
  },
  {
    "topic_id": 5,
    "topic": "NodeJs",
    "topic_date": new Date("2021-10-25"),
  },
]);


db.company_drives.insertMany([
  {
    "user-id": 1,
    "drive_date": new Date("2021-10-05"),
    "company_name": "Google",
  },
  {
    "user-id": 1,
    "drive_date": new Date("2021-10-10"),
    "company_name": "Amazon",
  },
  {
    "user-id": 2,
    "drive_date": new Date("2021-10-20"),
    "company_name": "Walmart",
  },
  {
    "user-id": 3,
    "drive_date": new Date("2021-10-15"),
    "company_name": "Zoho",
  },
  {
    "user-id": 4,
    "drive_date": new Date("2021-10-30"),
    "company_name": "Dell",
  },
]);


db.mentors.insertMany([
  {
    "mentor-id": 1,
    "mentor_name": "mentor1",
    "mentor_email": "mentor1@gmail.com",
    "mente_count": 10,
  },
  {
    "mentor-id": 2,
    "mentor_name": "mentor2",
    "mentor_email": "mentor2@gmail.com",
    "mente_count": 20,

  },
  {
    "mentor-id": 3,
    "mentor_name": "mentor3",
    "mentor_email": "mentor3@gmail.com",
    "mente_count": 15,

  },
  {
    "mentor-id": 4,
    "mentor_name": "mentor4",
    "mentor_email": "mentor4@gmail.com",
    "mente_count": 25,


  },
  {
    "mentor-id": 5,
    "mentor_name": "mentor5",
    "mentor_email": "mentor5@gmail.com",
    "mente_count": 21,

  },
]);

// Find all the topics and tasks which are thought in the month of October
db.topics.find({
  topic_date: {
    "$gte": ISODate("2021-10-01"),
    "$lte": ISODate("2021-10-31")
  }
})
db.tasks.find({
  due_date: {
    "$gte": ISODate("2021-10-01"),
    "$lte": ISODate("2021-10-31")
  }
})
// Find all the company drives which appeared between 15 oct - 2021 and 31 - oct - 2021
db.collection.aggregate([
  {
    "$match": {
      drive_date: {
        "$gte": ISODate("2021-10-15"),
        "$lte": ISODate("2021-10-31")
      }
    }
  }
])
// Find the number of problems solved by the user in codekata

db.collection.aggregate([
  {
    "$group": {
      "_id": "$user-id",
      total_problem_solved: {
        $sum: "$no_of_problems_solved"
      }
    }
  }
])

// Find all the mentors with who has the mentee's count more than 15
db.collection.find({
  mente_count: {
    $gt: 15
  }
})

// Find the number of users task is not submitted  between 15 oct - 2020 and 31 - oct - 2020

db.tasks.aggregate([{ $match: { submitted: "false" } }])
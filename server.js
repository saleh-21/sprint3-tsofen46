const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://saleh:saleh1996@cluster0.kpqta.mongodb.net/jira";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });



const Task = mongoose.model('Task', {
    jiraItem: {
        jiraId: String,
        jiraName: String,
        jiraType: String,
        priority: String,
        status: String,
        specialFields: {
            jiraParentId: String,
            functionalTest: Boolean,
            qaRepresentative: String,
            fixVersion: String
        }
    },
    qcItem: {
        requirmentId: String,
        requirementType: String,
        status: String
    },
    diffItem: {
        type: { type: String },
        updateTime: Number,
        updatedFields: [
            {
                fieldName: String,
                oldValue: String,
                newValue: String
            }
        ]
    }
    // taskItem: {
    //   user: User,
    //   isDone: Boolean,
    //   updatedTime: Date,
    //   createdTime: Date
    // }
});



const data = [
    {
        "jiraItem": {
            "jiraId": "TRIES-43173",
            "jiraName": "PSI 42: SAR Support for FHC FSCK",
            "jiraType": "Epic",
            "priority": "P00",
            "status": "Funnel",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Morad",
                "Fix-Version": "Foothills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Blocked",
            "requirementType": "Epic",
            "requirementId": "2284",
            "Creation-Time": 1596500759
        },
        "diffItem": {
            "updatedTime": 1596500759,
            "type": "Delete"
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Backlog",
            "jiraType": "Epic",
            "jiraId": "TRIES-41773",
            "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Marshod",
                "Fix-Version": "Foothills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Backlog",
            "requirementType": "Epic",
            "requirementId": "2244"
        },
        "diffItem": {
            "updatedTime": 1596500759,
            "type": "Update",
            "updatedFields": [
                {
                    "fieldName": "priority",
                    "oldValue": "low",
                    "newValue": "critical"
                }
            ]
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Backlog",
            "jiraType": "Epic",
            "jiraId": "TRIES-37201",
            "jiraName": "PSI 41: FSCK Support for Late Dedup and VLB Defrag Phase 1 & 2",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Lina",
                "Fix-Version": "handhills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Backlog",
            "requirementType": "Epic",
            "requirementId": "2011",
            "Creation-Time": 1596500759
        },
        "diffItem": {
            "updatedTime": 1596500759,
            "type": "Delete"
        }
    },
    {
        "jiraItem": {
            "priority": "P01",
            "status": "Done",
            "jiraType": "Epic",
            "jiraId": "TRIES-36948",
            "jiraName": "PSI 39: RAID fsckInfrastructure update and validation rules expansion",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Moran",
                "Fix-Version": "handhills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Done",
            "requirementType": "Epic",
            "requirementId": "2008"
        },
        "diffItem": {
            "updatedTime": 1596500759,
            "type": "Update",
            "updatedFields": [
                {
                    "fieldName": "status",
                    "oldValue": "backlog",
                    "newValue": "in progress"
                }
            ]
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Backlog",
            "jiraType": "Epic",
            "jiraId": "TRIES-34825",
            "jiraName": "PSI 40: Fault ContainmentFSCK support",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Tal",
                "Fix-Version": "handhills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Backlog",
            "requirementType": "Epic",
            "requirementId": "2009",
            "Creation-Time": 1596500759
        },
        "diffItem": {
            "updatedTime": 1596500760,
            "type": "Delete"
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Backlog",
            "jiraType": "Epic",
            "jiraId": "TRIES-34722",
            "jiraName": "PSI 41: RAID fsckSupport V2 new features",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Rami",
                "Fix-Version": "handhills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Backlog",
            "requirementType": "Epic",
            "requirementId": "1956"
        },
        "diffItem": {
            "updatedTime": 1596500760,
            "type": "Update",
            "updatedFields": [
                {
                    "fieldName": "status",
                    "oldValue": "in progress",
                    "newValue": "done"
                }
            ]
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Backlog",
            "jiraType": "Epic",
            "jiraId": "TRIES-34722",
            "jiraName": "PSI 41: RAID fsckSupport V2 new features",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Rami",
                "Fix-Version": "handhills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Backlog",
            "requirementType": "Epic",
            "requirementId": "1956",
            "Creation-Time": 1596500759
        },
        "diffItem": {
            "updatedTime": 1596500760,
            "type": "Update",
            "updatedFields": [
                {
                    "fieldName": "QaRepresentative",
                    "oldValue": "Tal",
                    "newValue": "Rami"
                }
            ]
        }
    },
    {
        "jiraItem": {
            "priority": "P01",
            "status": "Implementing",
            "jiraType": "Epic",
            "jiraId": "TRIES-32895",
            "jiraName": "PSI 40: RAID fsckInfrastructure update and validation rules expansion",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Walla",
                "Fix-Version": "handhills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "In Progress",
            "requirementType": "Epic",
            "requirementId": "1892"
        },
        "diffItem": {
            "updatedTime": 1596500760,
            "type": "Update",
            "updatedFields": [
                {
                    "fieldName": "status",
                    "oldValue": "in progress",
                    "newValue": "done"
                }
            ]
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Backlog",
            "jiraType": "Epic",
            "jiraId": "TRIES-28635",
            "jiraName": "PSI 42: FSCK Support for Late Dedup and VLB Defrag Phase 3 & 4",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Maharan",
                "Fix-Version": "handhills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Backlog",
            "requirementType": "Epic",
            "requirementId": "1793",
            "Creation-Time": 1596500759
        },
        "diffItem": {
            "updatedTime": 1596500761,
            "type": "Update",
            "updatedFields": [
                {
                    "fieldName": "priority",
                    "oldValue": "High",
                    "newValue": "low"
                }
            ]
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Backlog",
            "jiraType": "Epic",
            "jiraId": "TRIES-28531",
            "jiraName": "Quality: PSI 41: FSCK Test Support for FH-C DP Features",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Lina",
                "Fix-Version": "Foothills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "Backlog",
            "requirementType": "Epic",
            "requirementId": "2264"
        },
        "diffItem": {
            "updatedTime": 1596500761,
            "type": "Update",
            "updatedFields": [
                {
                    "fieldName": "status",
                    "oldValue": "in progress",
                    "newValue": "done"
                }
            ]
        }
    },
    {
        "jiraItem": {
            "priority": "P00",
            "status": "Implementing",
            "jiraType": "Feature",
            "jiraId": "TRIF-761",
            "jiraName": "Warning State for Job Steps  is not intuitively available for users",
            "Special-Fields": {
                "Jira-Parent-Id": "TRIES-21957",
                "Functional-Test": true,
                "Qa-Representative": "Tal",
                "Fix-Version": "Foothills V1.1.0 (Core)"
            }
        },
        "qcItem": {
            "status": "N/A",
            "requirementType": "Feature",
            "requirementId": "1918"
        },
        "diffItem": {
            "updatedTime": 1596500763,
            "type": "Updated",
            "updatedFields": [
                {
                    "fieldName": "status",
                    "oldValue": "in progress",
                    "newValue": "done"
                }
            ]
        }
    }
];

// Task.insertMany(data)
let priorityArray = [];
let statusArray = [];
let assigneeArray = [];

Task.find({ 'diffItem.type': 'Update', 'diffItem.updatedFields.0.fieldName': 'priority' }).then(data => {
    priorityArray = data;
})

Task.find({ 'diffItem.type': 'Update', 'diffItem.updatedFields.0.fieldName': 'status' }).then(data => {
    statusArray = data;
})

Task.find({ 'diffItem.type': 'Update', 'diffItem.updatedFields.0.fieldName': 'assignee' }).then(data => {
    assigneeArray = data;
})

app.get('/start', (req, res) => {

    res.send({ array: priorityArray })
})

app.post('/getModification', (req, res) => {
    const { choise } = req.body
    const { startDate } = req.body
    const { endDate } = req.body
    console.log(choise)
    
    const milliStartDate = new Date(startDate).getTime()
    const milliEndDate = new Date(endDate).getTime()

    console.log(milliStartDate)
    console.log(milliEndDate)
    Task.find({
        'diffItem.type': 'Update',
        'diffItem.updatedFields.0.fieldName': choise,
        'diffItem.updateTime': { $lte: milliEndDate },
        'diffItem.updateTime': { $gte: milliStartDate }
    }).then(data => {
        console.log(data)
        console.log("!@!@!@!@!@!@!@!@!@!@!@!@!@!")
        res.send(data)
    })
})

app.listen(3000, () => { console.log("App is Listening to 3000") })
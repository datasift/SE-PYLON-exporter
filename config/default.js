"use strict";

module.exports = {
    "app": {
        "max_parallel_tasks": 3
    },
    "hash": "b5566a154bb6dcd19b52b3b431e59373",
    "auth": {
        "username": "CS_2",
        "api_key": "5c15152f7086f7f3b2d2cc6b25648e94"
    },
    "analysis": {
        "freqDist": [
            {
                "target": "fb.parent.author.gender",
                "threshold": 2,
            },
            {
                "target": "fb.parent.topics.name",
                "threshold": 2,
                "filter": "fb.parent.sentiment == \"negative\""
            },
            {
                "target": "fb.parent.author.gender",
                "threshold": 2,
                "then": {
                    "target": "fb.parent.author.age",
                    "threshold": 6
                }
            },
            {
                "target": "fb.parent.topics.name",
                "threshold": 5,
                "then": {
                    "target": "fb.parent.topics.name",
                    "threshold": 2
                }
            }
        ],
        "timeSeries": [
            {
                "interval": "week",
                "span": 1
            }
        ]
    }
};

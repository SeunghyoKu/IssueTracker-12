//
//  Issue.swift
//  IssueTracker
//
//  Created by 박성민 on 2020/10/28.
//

import Foundation

enum IssueOpen: Int {
    case open = 1
    case closed = 0
    
    var text: String {
        switch self {
        case .open:  return "Close"
        case .closed: return "Open"
        }
    }
        
    var param: Bool {
        switch self {
        case .open:  return false
        case .closed: return true
        }
    }
    
    var image: String {
        switch self {
        case .open:  return "closed"
        case .closed: return "open"
        }
    }
    
    var color: String {
        switch self {
        case .open:  return "closeIssueColor"
        case .closed: return "openIssueColor"
        }
    }
}

struct Issue: Codable, Hashable {
    
    let issueId: Int
    var title: String
    var milestoneId: Int?
    var milestoneTitle: String?
    var writeTime: String
    var isOpen: Int
    var writerId: Int
    var writer: String
    var isAssigned: Int
    var isMentioned: Int
    var labels: [Label]
    var assignee: [User]
    
    init(title: String, milestoneId: Int?, milestoneTitle: String?, writeTime: String, isOpen: Int,
         writerId: Int, writer: String, isAssigned: Int, isMentioned: Int, labels: [Label], assignee: [User]) {
        self.issueId = -1
        self.title = title
        self.milestoneId = milestoneId
        self.milestoneTitle = milestoneTitle
        self.writeTime = writeTime
        self.isOpen = isOpen
        self.writerId = writerId
        self.writer = writer
        self.isAssigned = isAssigned
        self.isMentioned = isMentioned
        self.labels = labels
        self.assignee = assignee
    }
    
    static func == (lhs: Issue, rhs: Issue) -> Bool {
        return lhs.issueId == rhs.issueId
    }
    
    static func < (lhs: Issue, rhs: Issue) -> Bool {
        return lhs.issueId < rhs.issueId
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(issueId)
    }
    
    enum CodingKeys: String, CodingKey {
        case issueId = "issue_id"
        case title
        case milestoneId = "milestone_id"
        case milestoneTitle = "milestone_title"
        case writeTime = "write_time"
        case isOpen = "is_open"
        case writerId = "writer_id"
        case writer
        case isAssigned = "is_assigned"
        case isMentioned = "is_mentioned"
        case labels
        case assignee
    }
}

struct IssueArray: Codable, Hashable {
    let issueArray: [Issue]
    
    enum CodingKeys: String, CodingKey {
        case issueArray = "issueArr"
    }
}
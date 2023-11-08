// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract IdeaSubmission {
    struct Idea {
        string name;
        string email;
        string location;
        string topic;
        string description;
        uint256 budget;
        address owner;
    }

    Idea[] public ideas;

    function submitIdea(
        string memory _name,
        string memory _email,
        string memory _location,
        string memory _topic,
        string memory _description,
        uint256 _budget
    ) public {
        Idea memory newIdea = Idea({
            name: _name,
            email: _email,
            location: _location,
            topic: _topic,
            description: _description,
            budget: _budget,
            owner : msg.sender
        });

        ideas.push(newIdea);
    }

    function getIdeaCount() public view returns (uint256) {
        return ideas.length;
    }
}

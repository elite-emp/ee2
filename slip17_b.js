var app = angular.module('StudentApp', []);

app.controller('StudentController', function($scope) {
    $scope.students = [
        { name: 'Ajay jaid', rollNumber: '101', grade: 'A+' },
        { name: 'Rushikesh Kashid', rollNumber: '102', grade: 'B+' },
        { name: 'Aniket Galande', rollNumber: '103', grade: 'A-' },
        { name: 'Tushar P', rollNumber: '104', grade: 'B' },
        { name: 'Ishan P', rollNumber: '105', grade: 'B' },
        { name: 'Shubham Morade', rollNumber: '106', grade: 'A' },
        { name: 'sujit Sable', rollNumber: '107', grade: 'B-' },
        { name: 'Rohit Sharma', rollNumber: '108', grade: 'C' },
        { name: 'Virat Kolhi', rollNumber: '109', grade: 'A' },
        { name: 'Messi', rollNumber: '110', grade: 'A-' }
    ];
});


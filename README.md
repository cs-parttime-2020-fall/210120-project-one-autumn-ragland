# 21 01 20 HTML CSS JS Project One

## Project Description
The goal of this project is to build and deploy a to do application! The application will allow you to add and remove tasks from two separate lists; urgent and not urgent.

You will give a 10 minute presentation on Monday 01/25 at 6:00 PM walking the class through your final site and speaking to one thing that you found difficult and one thing that you especially like about your site. Following presentations the class will walk through the steps to host the site using [github pages](https://pages.github.com/). Following the deployment of your site a solution walkthrough will be provided as well. Your project will be graded using the rubric listed in the resources section below. You will be graded on the final site, the organization and effectiveness of your code, your presentation, and your success with deploying the site.

## Project Requirements
### Documentation
- Drawn wire-frames of the application pushed to project repository before starting development
- A link to your deployed site added to the read me (this will be added after we deploy sites as a class) 

### Content
You must have the following content to meet the project requirements but you are welcome to add more appropriate to how you'd like your page to look!
#### HTML
- A form to add tasks to a list of urgent or non-urgent tasks with the following fields
    - Text field for a description of the task
    - Selection field to choose `urgent` or `not urgent`
    - Date field for a due date for the task
- An element to display all tags marked as `urgent` on submission
- An element to display all tags marked as `not urgent` on submission
#### CSS
- Use of grid display to achieve your wireframe
- Use of bootstrap classes on at least two elements

#### JavaScript
- When the form is submitted the following actions should occur
    - Task description and due date are added to the element displaying urgent tasks if the task is urgent
    - Task description and due date are added to the element displaying non urgent tasks if the task is not urgent
    - Form fields are cleared
- When a task is clicked in either the urgent or non urgent element the following actions should occur
    - Confirm if the user wants to remove the clicked task
    - Hide the task from the list if the user choses `okay`
    - Hint : This can be preformed using `event.target` and `setAttribute()`

## Resources
- [Rubric](https://docs.google.com/document/d/1ZvMGs0U770Tahzy1vKa2rh1uCJRPB-MydvVmzz6TD3E/edit?usp=sharing)
- [Project Example](https://youtu.be/NuEYuf0uri4)

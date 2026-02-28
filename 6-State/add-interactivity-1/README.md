---
difficulty: 1
chapter: "Chapter 6: State"
training: true
tags: react
---

# Add Interactivity

## Challenge Description

Time to make your Movie Rating App truly interactive! 🎬 You'll be transforming a static movie display into a full-featured movie management application. This challenge focuses on responding to user interactions and managing state.

Your task is to implement movie management features including adding, editing, removing movies, and updating ratings. You'll see a `Modal` component in `components/ui/Modal.jsx` that displays the form. You'll need to implement the logic to open and close the modal appropriately based on user actions as well.

## Requirements

- Implement modal open/close functionality based on user actions
- Add edit and remove action buttons to the MovieItem component
- Implement functionality to edit a movie's details when the edit button is clicked by opening the modal with the movie's existing data
- Make star ratings clickable to update a movie's rating
- Add an "Add Movie" button that opens the modal with an empty form
- Add a "Remove Ratings" button to clear all movie ratings
- When editing a movie, update the movie in the list with the updated data
- When adding a new movie, the movie should be added to the list
- When removing a movie, it should be removed from the list

> 💡 HINT: Pass callback functions as props to handle user interactions
>
> 💡 HINT: Use the existing `MovieForm` component for both adding and editing movies
>
> 💡 HINT: You can visit imdb.com to find movie descriptions, images, etc for testing your application

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you'd like to mimic this style, feel free to do so, but it is not required.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTYtMS9zY3JlZW5zaG90LmdpZg==)

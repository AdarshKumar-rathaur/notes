import React from 'react'

export default function About() {
    return (
        <div>
            <div className="container my-5">
                <div className="p-4 rounded shadow-sm">
                    <h2 className="mb-4 text-center">About</h2>
                    <p>
                        <strong>Notes</strong> is a simple and intutive tool designed to help users quickly capture and organize their thoughts.
                        Whether it's jotting down ideas, making to-do lists, or saving important reminders, the app provides a clean interface and smooth experience.
                        With features like easy editing, categorization, and quick search, staying organized has never been easier.
                    </p>

                    <hr className="my-4" />
                    <p><strong>Q. </strong>How to edit note?</p>
                    <p><strong>Ans. </strong>Double click on note title or description to edit it.</p>
                    <p><strong>Q. </strong>Where is my notes stored?</p>
                    <p><strong>Ans. </strong>It is stored in your device local storage.</p>
                </div>
            </div>
        </div>
    )
}

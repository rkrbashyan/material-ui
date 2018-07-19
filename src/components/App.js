import React, {Component, Fragment} from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import {muscles, exercises} from '../store';

export default class extends Component {
  state = {
    exercises,
    selectedExercise: {}
  }

  getExcercisesByMuscles() {
    const initialState = muscles.reduce((exercises, category)=> ({
        ...exercises,
        [category]: []
    }), {})

    const grouped = this.state.exercises.reduce((excersises, exercise)=>{
      const { muscles } = exercise;

      // Grouping by musclus
      excersises[muscles] = [...excersises[muscles], exercise ];

      return excersises; 
    }, initialState )

    // Implement Object.entries
    return Object.keys(grouped).reduce((acc, key)=> [...acc, [key, grouped[key]]], [])
  }

  handleCategorySelected = category => {
    this.setState({
      category,
      selectedExercise: {}
    })
  }

  handleExerciseSelected = (id) => {
    this.setState((prevState) => ({
      selectedExercise: prevState.exercises.find((e) => e.id === id)
    }))
  }

  handleCreate = (exercise) => {
    this.setState(({exercises}) => ({
      exercises: [...exercises, exercise]
    }))
  }

  handleDelete = (id) => {
    this.setState(({exercises}) => ({
      exercises: exercises.filter((e) => e.id !== id)
    }))
  }

  render() {

    const exercises = this.getExcercisesByMuscles(),
      { category, selectedExercise } = this.state

    return <Fragment>
      <Header muscles={muscles} onCreate={this.handleCreate}/>
      <Exercises 
        category = {category}
        exercises={exercises}
        onSelect={this.handleExerciseSelected}
        selectedExercise={selectedExercise}
        onDelete={this.handleDelete}
      />
      <Footer 
        category={category}
        muscles={muscles}
        onSelect= {this.handleCategorySelected}
      />
    </Fragment>
  }
}

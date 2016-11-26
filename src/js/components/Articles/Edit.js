import React from 'react'
import { browserHistory } from 'react-router'
import { inject } from 'mobx-react'

import Form from './Form'

@inject('articlesStore')
export default class Edit extends React.Component {
  
  componentDidMount() {
    let articleID = this.props.params.articleID
    let articleForm = this.refs.articleForm
    this.props.articlesStore.fetchArticle(articleID).then((response) => {
      if (response.status == 200) {
        articleForm.setArticle(response.data)
      }
    })
  }
  
  handleSubmit(articleParams) {
    this.props.articlesStore.updateArticle(articleParams, this.props.params.articleID).then((response) => {
      if (response.status == 200) {
        browserHistory.push('/admin/articles')
      }
    })
  }
  
  render() {
    return (
      <Form handleSubmit={ this.handleSubmit.bind(this) } ref='articleForm' />
    )
  }
}
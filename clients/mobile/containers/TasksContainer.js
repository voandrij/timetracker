import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Tasks from '../components/Tasks.js';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
	fetchProjects() {
		dispatch(fetchProjects());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
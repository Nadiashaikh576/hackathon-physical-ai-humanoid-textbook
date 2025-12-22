# API Contracts: Digital Twin Simulation System

## Overview
This document defines the interfaces for the digital twin simulation system, focusing on the interactions between simulation components and educational content delivery.

## Core Simulation Interfaces

### Digital Twin Management Service

#### Create Digital Twin
- **Endpoint**: `POST /digital-twins`
- **Description**: Creates a new digital twin instance with specified parameters
- **Request**:
  ```json
  {
    "name": "string",
    "robot_model_id": "string",
    "simulation_environment": "gazebo|unity",
    "physics_parameters": {
      "gravity": "number",
      "friction_coefficient": "number"
    },
    "sensor_configurations": [
      {
        "type": "lidar|camera|imu",
        "position": {"x": "number", "y": "number", "z": "number"},
        "parameters": "object"
      }
    ]
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "name": "string",
    "status": "created|running|stopped",
    "created_at": "timestamp"
  }
  ```

#### Get Digital Twin Status
- **Endpoint**: `GET /digital-twins/{id}`
- **Description**: Retrieves the current status and properties of a digital twin
- **Response**:
  ```json
  {
    "id": "string",
    "name": "string",
    "status": "created|running|stopped|error",
    "robot_model": "object",
    "physics_properties": "object",
    "sensor_data": "object",
    "environment": "object"
  }
  ```

#### Start Simulation
- **Endpoint**: `POST /digital-twins/{id}/start`
- **Description**: Starts the simulation for a digital twin
- **Response**: 200 OK with simulation session details

#### Stop Simulation
- **Endpoint**: `POST /digital-twins/{id}/stop`
- **Description**: Stops the simulation for a digital twin
- **Response**: 200 OK

## Sensor Simulation Interfaces

### Sensor Data Stream
- **Endpoint**: `GET /digital-twins/{id}/sensors/{sensor_type}/stream`
- **Description**: Provides a real-time stream of sensor data from the digital twin
- **Response**: Streaming sensor data in appropriate format based on sensor type

### Sensor Configuration
- **Endpoint**: `PUT /digital-twins/{id}/sensors/{sensor_id}`
- **Description**: Updates the configuration of a specific sensor
- **Request**:
  ```json
  {
    "position": {"x": "number", "y": "number", "z": "number"},
    "orientation": {"qx": "number", "qy": "number", "qz": "number", "qw": "number"},
    "parameters": "object"
  }
  ```

## Educational Content Interfaces

### Module Progress Tracking
- **Endpoint**: `POST /modules/2/progress`
- **Description**: Records progress in Module 2 (Digital Twin Simulation)
- **Request**:
  ```json
  {
    "user_id": "string",
    "chapter": "1|2|3",
    "completed_sections": ["string"],
    "assessment_score": "number"
  }
  ```
- **Response**: 200 OK with progress summary

### Content Retrieval
- **Endpoint**: `GET /modules/2/content/{chapter}/{section}`
- **Description**: Retrieves specific content for Module 2
- **Response**: Educational content in appropriate format (text, images, etc.)

## Simulation Environment Interfaces

### Gazebo Integration
- **Endpoint**: `POST /environments/gazebo/launch`
- **Description**: Launches a Gazebo simulation environment
- **Request**:
  ```json
  {
    "world_file": "string",
    "robot_model": "string",
    "physics_engine": "ode|bullet|simbody"
  }
  ```
- **Response**: Simulation session details

### Unity Integration
- **Endpoint**: `POST /environments/unity/launch`
- **Description**: Launches a Unity simulation environment
- **Request**:
  ```json
  {
    "scene_name": "string",
    "robot_model": "string",
    "rendering_quality": "low|medium|high|ultra"
  }
  ```
- **Response**: Simulation session details

## Error Handling

All endpoints follow standard HTTP error codes:
- 200: Success
- 400: Bad request (invalid parameters)
- 404: Resource not found
- 500: Internal server error

Error responses follow this format:
```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": "object"
  }
}
```
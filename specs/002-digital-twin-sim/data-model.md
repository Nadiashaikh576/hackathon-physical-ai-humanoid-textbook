# Data Model: Module 2 Digital Twin Simulation

## Entities

### Digital Twin
- **Description**: A virtual representation of a physical humanoid robot that includes physics, sensors, and environmental interactions
- **Attributes**: 
  - id (string): Unique identifier for the digital twin
  - name (string): Human-readable name of the twin
  - robot_model (string): Reference to the humanoid robot model
  - physics_properties (object): Physical characteristics (mass, inertia, etc.)
  - sensor_configurations (array): List of simulated sensors
  - environment (string): Reference to the simulation environment
  - status (enum): Current state (design, testing, validation, deprecated)

### Physics Simulation
- **Description**: Computational modeling of physical laws (gravity, collisions, friction, dynamics) in a virtual environment
- **Attributes**:
  - id (string): Unique identifier for the physics simulation
  - gravity_constant (number): Gravitational force applied (typically 9.81 m/s²)
  - collision_detection (object): Settings for collision detection algorithms
  - friction_model (object): Parameters for friction simulation
  - dynamics_engine (string): Name of the physics engine used (e.g., ODE, Bullet)
  - simulation_accuracy (number): Level of precision in calculations

### Gazebo Environment
- **Description**: 3D simulation environment that provides physics simulation and sensor simulation capabilities for ROS-based robots
- **Attributes**:
  - id (string): Unique identifier for the Gazebo environment
  - name (string): Name of the environment
  - world_file (string): Path to the world definition file
  - physics_engine (string): Physics engine used (ODE, Bullet, Simbody)
  - supported_sensors (array): List of sensor types supported
  - robot_models (array): List of robot models compatible with this environment
  - lighting_conditions (object): Environmental lighting properties

### Unity Environment
- **Description**: 3D rendering and simulation platform that provides high-fidelity visual environments for robot simulation
- **Attributes**:
  - id (string): Unique identifier for the Unity environment
  - name (string): Name of the environment
  - rendering_quality (enum): Level of visual fidelity (low, medium, high, ultra)
  - supported_sensors (array): List of sensor types that can be simulated
  - lighting_model (object): Parameters for lighting simulation
  - asset_pack (string): Collection of 3D assets used in the environment

### Simulated Sensor
- **Description**: Virtual implementation of real sensors (LiDAR, cameras, IMUs) that generate realistic data for AI and control systems
- **Attributes**:
  - id (string): Unique identifier for the sensor
  - type (enum): Type of sensor (LiDAR, camera, depth_camera, IMU, etc.)
  - position (object): 3D position relative to robot frame
  - orientation (object): 3D orientation relative to robot frame
  - parameters (object): Sensor-specific parameters (resolution, range, etc.)
  - noise_model (object): Parameters for adding realistic noise to sensor data
  - data_output_format (string): Format of the simulated sensor data

### Humanoid Robot Model
- **Description**: Digital representation of a human-like robot with articulated joints and sensors that can be simulated in various environments
- **Attributes**:
  - id (string): Unique identifier for the robot model
  - name (string): Name of the robot model
  - urdf_path (string): Path to the URDF file defining the robot
  - joint_count (number): Number of joints in the robot
  - degrees_of_freedom (number): Total degrees of freedom
  - sensor_mounts (array): Positions where sensors can be attached
  - mass_properties (object): Total mass and center of mass information
  - kinematic_chain (object): Definition of joint connections and limits

## Relationships

### Digital Twin contains Physics Simulation
- One Digital Twin has one Physics Simulation
- Physics Simulation belongs to one Digital Twin

### Digital Twin uses Gazebo Environment
- One Digital Twin uses one Gazebo Environment
- Gazebo Environment can be used by multiple Digital Twins

### Digital Twin uses Unity Environment
- One Digital Twin uses one Unity Environment
- Unity Environment can be used by multiple Digital Twins

### Digital Twin includes Simulated Sensors
- One Digital Twin includes multiple Simulated Sensors
- Simulated Sensor belongs to one Digital Twin

### Digital Twin represents Humanoid Robot Model
- One Digital Twin represents one Humanoid Robot Model
- Humanoid Robot Model can be represented by multiple Digital Twins (in different environments)

## Validation Rules

### Digital Twin Validation
- name must be unique within the system
- robot_model must reference an existing Humanoid Robot Model
- physics_properties must include valid physical parameters
- sensor_configurations must reference valid Simulated Sensors
- environment must reference an existing Gazebo or Unity Environment

### Physics Simulation Validation
- gravity_constant must be a positive number
- simulation_accuracy must be within acceptable range (e.g., 0.001 to 0.1)

### Gazebo Environment Validation
- world_file must exist and be accessible
- physics_engine must be one of the supported engines

### Unity Environment Validation
- rendering_quality must be one of the defined values
- lighting_model must contain valid parameters

### Simulated Sensor Validation
- type must be one of the supported sensor types
- position and orientation must be valid 3D coordinates
- parameters must match the requirements for the sensor type

### Humanoid Robot Model Validation
- urdf_path must point to a valid URDF file
- joint_count and degrees_of_freedom must be positive integers
- mass_properties must include positive mass values
# Data Model: ROS 2 Teaching Modules

## Entities

### Student
- **Description**: AI/software student with basic Python knowledge, new to robotics
- **Attributes**: 
  - python_knowledge_level (basic, intermediate, advanced)
  - robotics_experience (none, limited, experienced)
  - learning_progress (percentage)
  - assessment_scores (list of scores)
- **Validation rules**: 
  - python_knowledge_level must be one of: basic, intermediate, advanced
  - robotics_experience must be one of: none, limited, experienced

### ROS 2 System
- **Description**: The middleware that connects AI intelligence to humanoid robot bodies
- **Attributes**:
  - version (e.g., Humble Hawksbill)
  - components (list of core components)
  - communication_patterns (nodes, topics, services)
- **Relationships**: 
  - Contains multiple Nodes, Topics, Services
  - Connects to Robot systems

### Chapter Content
- **Description**: Educational materials structured as 3 chapters covering fundamentals, communication, and AI integration
- **Attributes**:
  - chapter_number (1, 2, or 3)
  - title (string)
  - content_type (fundamentals, communication, ai_integration)
  - learning_objectives (list of objectives)
  - exercises (list of practical exercises)
- **Validation rules**:
  - chapter_number must be between 1 and 3
  - content_type must be one of: fundamentals, communication, ai_integration
- **State transitions**:
  - draft → review → approved → published

### Node (ROS 2 concept)
- **Description**: A process that performs computation in ROS 2
- **Attributes**:
  - name (string)
  - publishers (list of topics published to)
  - subscribers (list of topics subscribed to)
  - services (list of services provided)
- **Relationships**:
  - Connects to multiple Topics and Services

### Topic (ROS 2 concept)
- **Description**: A stream of messages in ROS 2 communication
- **Attributes**:
  - name (string)
  - message_type (string)
  - publishers_count (number)
  - subscribers_count (number)
- **Relationships**:
  - Connected to multiple Nodes

### Service (ROS 2 concept)
- **Description**: A request/response communication pattern in ROS 2
- **Attributes**:
  - name (string)
  - request_type (string)
  - response_type (string)
  - provider (Node that provides the service)
- **Relationships**:
  - Provided by one Node
  - Used by multiple Nodes

### Robot System
- **Description**: A humanoid robot controlled by ROS 2
- **Attributes**:
  - name (string)
  - urdf_description (Unified Robot Description Format)
  - sensors (list of sensor types)
  - actuators (list of actuator types)
- **Relationships**:
  - Controlled by ROS 2 System
  - Contains multiple Links and Joints (from URDF)

### AI Controller
- **Description**: Python agents using rclpy that connect AI intelligence to robot systems
- **Attributes**:
  - name (string)
  - implementation_language (Python)
  - framework (rclpy)
  - control_algorithm (type of AI algorithm)
- **Relationships**:
  - Connects ROS 2 System to Robot System
  - Uses rclpy for ROS 2 communication

## Relationships Summary
- Student learns from Chapter Content
- Chapter Content covers ROS 2 System concepts
- ROS 2 System contains Nodes, Topics, and Services
- Nodes publish to/subscribe from Topics
- Nodes provide/require Services
- ROS 2 System controls Robot System
- AI Controller bridges AI intelligence and Robot System
- Robot System has URDF structure with Links and Joints
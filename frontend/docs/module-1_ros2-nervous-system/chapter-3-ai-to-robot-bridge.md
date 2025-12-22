# Chapter 3: AI-to-Robot Bridge

## Learning Objectives

After completing this chapter, you will be able to:
- Create Python agents using rclpy that interface with ROS 2
- Implement AI controllers that connect AI intelligence to robot systems
- Understand the basics of URDF (Unified Robot Description Format)
- Apply AI algorithms to control robotic systems through ROS 2
- Design agents that can perceive, reason, and act in robotic environments

## Python Agents Using rclpy

rclpy is the Python client library for ROS 2, providing the interface between Python programs and the ROS 2 system. It allows Python developers to create nodes, publish and subscribe to topics, make service calls, and execute actions.

Creating a Python agent in ROS 2 involves:
1. Initializing the ROS 2 client library
2. Creating a node that contains the agent's functionality
3. Setting up publishers, subscribers, services, or actions as needed
4. Implementing the agent's logic within the ROS 2 framework
5. Spinning the node to process ROS 2 callbacks

### Basic rclpy Node Structure

```python
import rclpy
from rclpy.node import Node

class AIAgentNode(Node):
    def __init__(self):
        super().__init__('ai_agent_node')
        # Initialize publishers, subscribers, services, etc.
        # Set up timers, parameters, etc.
        
    def agent_logic(self):
        # Implement the core AI logic here
        pass

def main(args=None):
    rclpy.init(args=args)
    ai_agent = AIAgentNode()
    
    try:
        rclpy.spin(ai_agent)
    except KeyboardInterrupt:
        pass
    finally:
        ai_agent.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Concept of AI Controllers

AI controllers in robotics bridge the gap between high-level AI algorithms and low-level robot control. They take abstract goals or decisions from AI systems and translate them into specific commands that the robot can execute.

### Types of AI Controllers

1. **Reactive Controllers**: Respond directly to sensor inputs with predefined behaviors
2. **Deliberative Controllers**: Plan actions based on internal models of the world
3. **Learning Controllers**: Adapt their behavior based on experience
4. **Hybrid Controllers**: Combine multiple control strategies

### Integration with ROS 2

AI controllers in ROS 2 typically:
- Subscribe to sensor topics to receive information about the environment
- Use services to request specific operations from other nodes
- Publish commands to actuator topics
- Implement actions for complex, multi-step behaviors
- Maintain internal state representing beliefs about the world

## Implementation Example: Simple AI Controller

Let's create a simple AI controller that implements a basic navigation behavior:

```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import LaserScan
from geometry_msgs.msg import Twist
from nav_msgs.msg import Odometry
import numpy as np

class SimpleNavigationController(Node):
    def __init__(self):
        super().__init__('simple_navigation_controller')
        
        # Create subscriber for laser scan data
        self.scan_subscription = self.create_subscription(
            LaserScan,
            '/scan',
            self.scan_callback,
            10)
        
        # Create subscriber for odometry data
        self.odom_subscription = self.create_subscription(
            Odometry,
            '/odom',
            self.odom_callback,
            10)
        
        # Create publisher for velocity commands
        self.cmd_vel_publisher = self.create_publisher(
            Twist,
            '/cmd_vel',
            10)
        
        # Controller state
        self.laser_data = None
        self.odom_data = None
        self.avoiding = False
        
        # Timer for control loop
        self.timer = self.create_timer(0.1, self.control_loop)
        
    def scan_callback(self, msg):
        self.laser_data = msg.ranges
        
    def odom_callback(self, msg):
        self.odom_data = msg
        
    def control_loop(self):
        if self.laser_data is None:
            return
            
        # Simple obstacle avoidance logic
        min_distance = min(self.laser_data) if self.laser_data else float('inf')
        
        cmd_vel = Twist()
        
        if min_distance < 1.0:  # Obstacle detected within 1 meter
            # Stop and turn
            cmd_vel.linear.x = 0.0
            cmd_vel.angular.z = 0.5  # Turn right
            self.avoiding = True
        else:
            # Move forward
            cmd_vel.linear.x = 0.5
            cmd_vel.angular.z = 0.0
            self.avoiding = False
            
        self.cmd_vel_publisher.publish(cmd_vel)

def main(args=None):
    rclpy.init(args=args)
    controller = SimpleNavigationController()
    
    try:
        rclpy.spin(controller)
    except KeyboardInterrupt:
        pass
    finally:
        controller.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## URDF Basics: Links, Joints, Robot Structure

URDF (Unified Robot Description Format) is an XML format used to describe robot models in ROS. It defines the physical and visual properties of a robot, including:

- **Links**: Rigid parts of the robot (e.g., chassis, arms, wheels)
- **Joints**: Connections between links that allow relative motion
- **Visual and Collision Properties**: How the robot looks and interacts with the environment
- **Inertial Properties**: Mass, center of mass, and inertia for physics simulation

### URDF Structure Example

```xml
<?xml version="1.0"?>
<robot name="simple_robot">
  <!-- Base link -->
  <link name="base_link">
    <visual>
      <geometry>
        <cylinder length="0.6" radius="0.2"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.6" radius="0.2"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="10"/>
      <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
    </inertial>
  </link>
  
  <!-- Wheel links -->
  <link name="wheel_left">
    <visual>
      <geometry>
        <cylinder length="0.1" radius="0.1"/>
      </geometry>
    </visual>
  </link>
  
  <!-- Joints connecting links -->
  <joint name="left_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="wheel_left"/>
    <origin xyz="0 0.25 -0.1" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
  </joint>
</robot>
```

## Creating AI Controllers with Python and rclpy

When creating AI controllers for robots, consider the following patterns:

### 1. Perception-Action Loop

```python
class PerceptionActionController(Node):
    def __init__(self):
        super().__init__('perception_action_controller')
        # Set up perception and action interfaces
        self.perception_callback = self.create_subscription(...)
        self.action_publisher = self.create_publisher(...)
        
    def perception_callback(self, msg):
        # Process sensor data
        processed_data = self.process_sensor_data(msg)
        
        # Make decisions based on processed data
        action = self.decide_action(processed_data)
        
        # Execute action
        self.execute_action(action)
        
    def process_sensor_data(self, sensor_msg):
        # Implement AI processing logic
        pass
        
    def decide_action(self, processed_data):
        # Implement decision-making logic
        pass
        
    def execute_action(self, action):
        # Publish commands to robot
        pass
```

### 2. Behavior-Based Architecture

```python
class BehaviorBasedController(Node):
    def __init__(self):
        super().__init__('behavior_based_controller')
        # Initialize multiple behaviors
        self.avoid_behavior = AvoidObstaclesBehavior()
        self.navigate_behavior = NavigateBehavior()
        self.interact_behavior = InteractBehavior()
        
    def sensor_callback(self, msg):
        # Get commands from all behaviors
        avoid_cmd = self.avoid_behavior.get_command(msg)
        navigate_cmd = self.navigate_behavior.get_command(msg)
        interact_cmd = self.interact_behavior.get_command(msg)
        
        # Arbitrate between behaviors
        final_cmd = self.arbitrate([avoid_cmd, navigate_cmd, interact_cmd])
        
        # Execute final command
        self.publish_command(final_cmd)
```

### 3. Learning-Based Controller

```python
class LearningController(Node):
    def __init__(self):
        super().__init__('learning_controller')
        # Initialize ML model
        self.model = self.initialize_model()
        
    def experience_callback(self, experience):
        # Update model based on experience
        self.update_model(experience)
        
    def control_callback(self, state):
        # Use model to determine action
        action = self.model.predict(state)
        self.publish_action(action)
```

## Integration with Humanoid Robots

When creating AI controllers for humanoid robots, additional considerations include:

### Balance and Stability
- Real-time control of center of mass
- Coordination of multiple limbs for stable locomotion
- Fall detection and recovery

### Human-Robot Interaction
- Natural language processing for communication
- Gesture recognition and generation
- Social behavior modeling

### Multi-Modal Perception
- Integration of visual, auditory, and tactile sensors
- State estimation for complex articulated bodies
- Environmental modeling in 3D space

## Practical Implementation: AI Controller for Humanoid Robot

Here's an example of an AI controller that could be used in a humanoid robot for basic interaction:

```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image, PointCloud2
from geometry_msgs.msg import Pose, Twist
from std_msgs.msg import String
import cv2
from cv2 import cv2 as cv
import numpy as np

class HumanoidAIController(Node):
    def __init__(self):
        super().__init__('humanoid_ai_controller')
        
        # Subscribers for different sensor modalities
        self.image_subscription = self.create_subscription(
            Image,
            '/camera/rgb/image_raw',
            self.image_callback,
            10)
            
        self.pointcloud_subscription = self.create_subscription(
            PointCloud2,
            '/camera/depth/points',
            self.pointcloud_callback,
            10)
            
        # Publishers for robot control
        self.cmd_vel_publisher = self.create_publisher(
            Twist,
            '/cmd_vel',
            10)
            
        self.speech_publisher = self.create_publisher(
            String,
            '/tts_input',
            10)
            
        # Internal state
        self.person_detected = False
        self.person_position = None
        self.interaction_state = 'idle'  # idle, approaching, interacting
        
        # Timer for main control loop
        self.timer = self.create_timer(0.1, self.control_loop)
        
    def image_callback(self, msg):
        # Convert ROS image message to OpenCV format
        # Detect people using a pre-trained model
        # Update internal state based on detection
        pass
        
    def pointcloud_callback(self, msg):
        # Process point cloud to get 3D positions
        # Update person position if detected
        pass
        
    def control_loop(self):
        if self.person_detected and self.person_position:
            # Decide on action based on state
            if self.interaction_state == 'idle':
                self.approach_person()
            elif self.interaction_state == 'approaching':
                if self.near_person():
                    self.interact_with_person()
        else:
            # Return to idle behavior
            self.return_to_idle()
            
    def approach_person(self):
        # Implement approach behavior
        cmd_vel = Twist()
        cmd_vel.linear.x = 0.2  # Move forward slowly
        self.cmd_vel_publisher.publish(cmd_vel)
        
    def near_person(self):
        # Check if close enough to person
        return self.person_position.distance < 1.0  # 1 meter threshold
        
    def interact_with_person(self):
        # Publish speech command
        greeting = String()
        greeting.data = "Hello! How can I help you today?"
        self.speech_publisher.publish(greeting)
        self.interaction_state = 'interacting'
        
    def return_to_idle(self):
        # Stop movement
        cmd_vel = Twist()
        self.cmd_vel_publisher.publish(cmd_vel)
        self.interaction_state = 'idle'

def main(args=None):
    rclpy.init(args=args)
    controller = HumanoidAIController()
    
    try:
        rclpy.spin(controller)
    except KeyboardInterrupt:
        pass
    finally:
        controller.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Summary

This chapter covered the creation of Python agents using rclpy to bridge AI intelligence and robot systems. We explored the concept of AI controllers and their role in translating high-level decisions into robot actions. We also covered URDF basics for describing robot structure and provided practical examples of implementing AI controllers for robotic systems.

With this knowledge, you can create sophisticated AI agents that interact with robots through ROS 2, enabling complex behaviors that combine perception, reasoning, and action.

## Glossary

- **rclpy**: The Python client library for ROS 2
- **AI Controller**: Software that bridges high-level AI algorithms and low-level robot control
- **URDF**: Unified Robot Description Format, an XML format for describing robot models
- **Link**: A rigid part of a robot in URDF
- **Joint**: A connection between links that allows relative motion
- **Perception-Action Loop**: The cycle of sensing, processing, deciding, and acting
- **Behavior-Based Architecture**: An approach to robotics using multiple concurrent behaviors

## Practical Exercise

1. Create a Python agent using rclpy that subscribes to a sensor topic and publishes commands to control a simulated robot
2. Implement a simple AI controller that performs a basic task (e.g., following a wall, avoiding obstacles)
3. Create a URDF file for a simple robot with at least 3 links and 2 joints
4. Extend your AI controller to use the robot model information from URDF

Expected outcome: You should have a working Python agent that demonstrates the AI-to-robot bridge concept, with proper integration between AI logic and robot control through ROS 2.

## Summary

In this chapter, we've explored how Python-based AI agents connect to ROS 2 controllers using rclpy, forming the bridge between high-level intelligence and low-level robotic control. We've examined how rclpy enables Python developers to participate in the ROS 2 ecosystem, allowing AI algorithms to publish and subscribe to topics, offer and call services, and implement actions. We've also covered URDF as the standard format for representing robot models in ROS, which is essential for simulation, motion planning, and control.

## Key Takeaways

- rclpy provides Python developers access to all ROS 2 capabilities
- AI agents can seamlessly integrate with ROS 2 systems as first-class participants
- URDF defines robot structure, kinematic properties, and visual appearance
- Proper synchronization is essential when connecting AI algorithms with real-time controllers
- URDF models are crucial for accurate simulation and motion planning

## Practice Exercises

1. Create a more complex AI agent that processes multiple sensor inputs simultaneously
2. Implement a behavior tree that coordinates multiple robot behaviors
3. Develop a reinforcement learning agent that operates within a ROS 2 environment
4. Create a custom URDF model for a specific robot and simulate it in Gazebo
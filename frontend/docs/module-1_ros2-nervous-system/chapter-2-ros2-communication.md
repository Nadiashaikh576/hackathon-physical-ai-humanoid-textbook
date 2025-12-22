# Chapter 2: ROS 2 Communication

## Learning Objectives

After completing this chapter, you will be able to:
- Explain the concepts of nodes, topics, and services in ROS 2
- Describe how information flows between sensors, decision-making systems, and actions
- Implement basic communication patterns in ROS 2
- Create simple examples demonstrating ROS 2 communication
- Apply communication patterns to humanoid robot scenarios

## ROS 2 Communication Patterns

ROS 2 provides several communication patterns that enable different parts of a robot to exchange information. The primary patterns are:

1. **Publish/Subscribe (Topics)**: One-way data distribution from publishers to subscribers
2. **Request/Response (Services)**: Synchronous communication for remote procedure calls
3. **Action**: Asynchronous communication for long-running tasks with feedback

These patterns are built on top of DDS (Data Distribution Service), which provides the underlying network communication infrastructure.

## Nodes: The Building Blocks of ROS 2

A node is a fundamental component of any ROS 2 program. It's a process that performs computation and communicates with other nodes through topics, services, or actions. Nodes are designed to be lightweight and modular, allowing complex systems to be built from simple, reusable components.

In a humanoid robot, you might have nodes for:
- Sensor processing (camera, IMU, force/torque sensors)
- Motion control (walking, grasping, head movement)
- Perception (object recognition, person detection)
- Planning (path planning, manipulation planning)
- High-level behaviors (dialogue, task management)

## Topics: Publish/Subscribe Communication

Topics enable one-to-many communication using a publish/subscribe model. Publishers send messages to a topic, and any number of subscribers can receive those messages. This pattern is ideal for:

- Sensor data distribution (e.g., camera images, laser scans)
- Robot state broadcasting (e.g., joint positions, robot pose)
- Event notifications

### Message Flow: Sensors → Decisions → Actions

In a typical robotic system, information flows in a pipeline:

1. **Sensors** publish data to topics (e.g., camera images, IMU readings, laser scans)
2. **Processing nodes** subscribe to sensor topics, process the data, and may publish results to new topics (e.g., object detections, obstacle locations)
3. **Decision-making nodes** subscribe to processed data and publish commands to action topics or service requests (e.g., "move to location", "grasp object")
4. **Actuator nodes** receive commands and execute actions, potentially publishing feedback about the execution

## Services: Request/Response Communication

Services provide a request/response communication pattern similar to REST APIs or remote procedure calls. A client sends a request to a server and waits for a response. This pattern is appropriate for:

- Operations that have a clear beginning and end
- Querying information (e.g., "get robot pose")
- Operations that modify system state (e.g., "set joint position")

## Actions: Long-Running Tasks with Feedback

Actions are designed for long-running operations that provide feedback during execution and can be canceled. They combine aspects of both topics and services and are ideal for:

- Navigation tasks ("go to position")
- Manipulation tasks ("pick up object")
- Calibration procedures

## High-Level Humanoid Examples

Let's consider how these communication patterns work in a humanoid robot performing a simple task: picking up an object.

### Scenario: Object Grasping

1. **Perception Node**: Subscribes to camera image topics, processes images to detect objects, and publishes object poses to a `/detected_objects` topic.

2. **Planning Node**: Subscribes to `/detected_objects`, plans a grasping approach, and sends a request to the `/motion_plan` service to check if the grasp is kinematically feasible.

3. **Motion Planning Service**: Receives service requests from the planning node, performs kinematic analysis, and returns whether the grasp is feasible.

4. **Manipulation Action Server**: Provides an action interface for grasping tasks. The planning node sends a goal to this action server specifying the object to grasp.

5. **Action Client**: In the planning node, sends the grasp goal to the action server and receives feedback about the progress of the grasp.

6. **Hardware Interface Nodes**: Handle the low-level control of joints, receiving commands from the manipulation action server and publishing feedback about joint positions and forces.

## Implementation Example: Simple Publisher and Subscriber

Let's look at a basic example of a publisher and subscriber in Python using rclpy:

```python
# Publisher example
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello World: {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

```python
# Subscriber example
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    minimal_subscriber = MinimalSubscriber()
    rclpy.spin(minimal_subscriber)
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Message Flow in Humanoid Robots

In humanoid robots, the communication patterns work together to coordinate complex behaviors:

1. **Sensory Integration**: Multiple sensor nodes publish data to topics (camera images, IMU data, joint positions, force/torque sensors). A sensor fusion node subscribes to these topics and publishes a unified state estimate.

2. **State Estimation**: The robot's current state (position, orientation, joint angles) is continuously published to topics that other nodes can use for planning and control.

3. **Behavior Coordination**: High-level behaviors subscribe to state information and sensor data, make decisions, and send commands to lower-level controllers via services or actions.

4. **Control Hierarchy**: Low-level controllers receive commands and send feedback about execution, creating a hierarchical control system where each level communicates with adjacent levels.

## Summary

This chapter covered the essential communication patterns in ROS 2: nodes, topics, services, and actions. We explored how information flows through a robotic system from sensors to decisions to actions, and looked at specific examples relevant to humanoid robots. In the next chapter, we'll see how to implement Python agents that use these communication patterns to create AI controllers for robots.

## Glossary

- **Node**: A process that performs computation in ROS 2
- **Topic**: A named bus for publish/subscribe communication
- **Publisher**: A node that sends messages to a topic
- **Subscriber**: A node that receives messages from a topic
- **Service**: A request/response communication pattern
- **Action**: An asynchronous communication pattern for long-running tasks
- **Message**: The data structure used for communication in ROS 2
- **DDS**: Data Distribution Service, the underlying communication middleware

## Practical Exercise

1. Create a simple ROS 2 package with a publisher and subscriber
2. Implement a service server and client that performs a basic calculation
3. Create an action server and client for a simple counting task
4. Run all three communication patterns simultaneously and observe their behavior

Expected outcome: You should have working examples of all three communication patterns, understanding when to use each one in a robotic system.

## Summary

In this chapter, we've explored the core communication patterns in ROS 2: topics, services, and actions. We've learned how topics enable asynchronous, one-way communication through the publish-subscribe pattern, ideal for sensor data distribution. Services provide synchronous request-response communication for operations with clear beginning and end. Actions extend services for long-running tasks that require feedback and the ability to be preempted. We've also examined the underlying DDS middleware that powers these communication patterns.

## Key Takeaways

- Topics use publish-subscribe pattern for asynchronous, one-way communication
- Services provide synchronous request-response communication for discrete operations
- Actions are designed for long-running tasks with feedback and preemption capabilities
- Quality of Service (QoS) profiles allow fine-tuning of communication characteristics
- DDS (Data Distribution Service) serves as the underlying communication middleware

## Practice Exercises

1. Implement a publisher that publishes sensor data at different frequencies using various QoS profiles
2. Create a service that performs complex calculations and returns results
3. Develop an action that controls a simulated robot movement with feedback
4. Experiment with different QoS settings and observe their impact on communication reliability
<?php

class UsersController extends AppController {

	public $components = array('Paginator', 'RequestHandler');

	    public function beforeFilter() {
	        parent::beforeFilter();
	        $this->Auth->allow('add', 'login'); // We can remove this line after we're finished
	    }

	    public function login() {
	        if ($this->Session->read('Auth.User')) {
	            $this->set(array(
	                'message' => array(
	                    'text' => __('You are logged in!'),
	                    'type' => 'error'
	                ),
	                '_serialize' => array('message')
	            ));
	        }

	        if ($this->request->is('get')) {
	            if ($this->Auth->login()) {
	                // return $this->redirect($this->Auth->redirect());
	                $this->set(array(
	                    'user' => $this->Session->read('Auth.User'),
	                    '_serialize' => array('user')
	                ));
	            } else {
	                $this->set(array(
	                    'message' => array(
	                        'text' => __('Invalid username or password, try again'),
	                        'type' => 'error'
	                    ),
	                    '_serialize' => array('message')
	                ));
	                $this->response->statusCode(401);
	            }
	        }
	    }

	    public function logout() {
	        if ($this->Auth->logout()) {
	            $this->set(array(
	                'message' => array(
	                    'text' => __('Logout successfully'),
	                    'type' => 'info'
	                ),
	                '_serialize' => array('message')
	            ));
	        }
	    }

	    /**
	     * index method
	     *
	     * @return void
	     */
	    public function index() {
	        $this->User->recursive = 0;
	        $this->set('users', $this->Paginator->paginate());
	    }

	    /**
	     * view method
	     *
	     * @throws NotFoundException
	     * @param string $id
	     * @return void
	     */
	    public function view($id = null) {
	        if (!$this->User->exists($id)) {
	            throw new NotFoundException(__('Invalid user'));
	        }
	        $options = array('conditions' => array('User.' . $this->User->primaryKey => $id));
	        $this->set('user', $this->User->find('first', $options));
	    }

	    /**
	     * add method
	     *
	     * @return void
	     */
	    public function add() {
	        if ($this->request->is('post')) {
	            $this->User->create();
	            if ($this->User->save($this->request->data)) {
	                $this->set(array(
	                    'message' => array(
	                        'text' => __('Registered successfully'),
	                        'type' => 'info'
	                    ),
	                    '_serialize' => array('message')
	                ));
	            } else {
	                $this->set(array(
	                    'message' => array(
	                        'text' => __('The user could not be saved. Please, try again.'),
	                        'type' => 'error'
	                    ),
	                    '_serialize' => array('message')
	                ));
	                $this->response->statusCode(400);
	            }
	        }
	    }
}

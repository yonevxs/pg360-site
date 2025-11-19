package br.com.pg360.api.controller;

import br.com.pg360.api.model.Usuario;
import br.com.pg360.api.repository.UsuarioRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
// import io.swagger.v3.oas.annotations.parameters.RequestBody; // ESTE IMPORT FOI REMOVIDO
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("http://localhost:5173")
@Tag(name = "Usuários", description = "Endpoints para gerenciamento de usuários")



public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @Operation(
            summary = "Criar um novo usuário",
            description = "Cria um novo usuário no sistema.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody( // CORREÇÃO APLICADA AQUI
                    required = true,
                    description = "Dados do usuário",
                    content = @Content(schema = @Schema(implementation = Usuario.class))
            ),
            responses = {
                    @ApiResponse(responseCode = "201", description = "Usuário criado com sucesso"),
            }
    )
    @PostMapping
    public ResponseEntity<Usuario> criar(@RequestBody Usuario usuario){ // @RequestBody do Spring
        return ResponseEntity.status(201).body(repository.save(usuario));
    }

    @Operation(
            summary = "Listar todos os usuários",
            description = "Retorna a lista completa de usuários."
    )
    @GetMapping
    public List<Usuario> listarTodos(){
        return repository.findAll();
    }

    @Operation(
            summary = "Buscar usuário por ID",
            parameters = {
                    @Parameter(name = "id", description = "ID do usuário", required = true)
            },
            responses = {
                    @ApiResponse(responseCode = "200", description = "Usuário encontrado"),
                    @ApiResponse(responseCode = "404", description = "Usuário não encontrado")
            }
    )
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable long id){
        Optional<Usuario> usuario = repository.findById(id);
        return usuario.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @Operation(
            summary = "Atualizar usuário",
            description = "Atualiza os dados de um usuário existente pelo ID."
    )
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizar(@PathVariable Long id, @RequestBody Usuario novo){
        return repository.findById(id)
                .map(u ->{
                    u.setNmUsuario(novo.getNmUsuario());
                    u.setEmailUsuario(novo.getEmailUsuario());
                    u.setSenhaUsuario(novo.getSenhaUsuario());
                    u.setDsUsuario((novo.getDsUsuario()));
                    return ResponseEntity.ok(repository.save(u));
                })
                .orElseGet(()-> ResponseEntity.notFound().build());
    }

    @Operation(
            summary = "Deletar usuário",
            description = "Remove um usuário do sistema.",
            responses = {
                    @ApiResponse(responseCode = "204", description = "Usuário removido"),
                    @ApiResponse(responseCode = "404", description = "Usuário não encontrado")
            }
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        if (repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}